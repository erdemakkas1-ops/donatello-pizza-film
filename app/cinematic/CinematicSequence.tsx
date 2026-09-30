"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const clips = [
  { src: "/cinematic/scene-01-web.mp4", scene: 0 },
  { src: "/cinematic/scene-02.mp4", scene: 1 },
  { src: "/cinematic/scene-03.mp4", scene: 2 },
  { src: "/cinematic/scene-05-v1.mp4", scene: 4 },
  { src: "/cinematic/scene-06-v1-original.mp4", scene: 5, directCut: true },
];
type Phase = "loading" | "playing" | "transition" | "done";

// Diagonal cuts measured on scene 6's first frame (706x1304), which is pixel-aligned with scene 5's last frame.
const diagonalCuts = [
  { from: [60, 366], to: [625, 931] },
  { from: [632, 367], to: [62, 923] },
];
const cutWidth = 16;

// Reveals scene 6's first frame only inside the growing cut strokes, so the new diagonals appear on the frozen scene 5 frame.
function drawCuts(canvas: HTMLCanvasElement, frame: HTMLVideoElement, progress: number[]) {
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "source-over"; ctx.lineCap = "round"; ctx.lineWidth = cutWidth; ctx.strokeStyle = "#fff";
  const tips: [number, number][] = [];
  diagonalCuts.forEach(({ from, to }, i) => {
    if (progress[i] <= 0) return;
    const tip: [number, number] = [from[0] + (to[0] - from[0]) * progress[i], from[1] + (to[1] - from[1]) * progress[i]];
    ctx.beginPath(); ctx.moveTo(from[0], from[1]); ctx.lineTo(tip[0], tip[1]); ctx.stroke();
    if (progress[i] < 1) tips.push(tip);
  });
  ctx.globalCompositeOperation = "source-in";
  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "source-over";
  tips.forEach(([x, y]) => {
    const glint = ctx.createRadialGradient(x, y, 0, x, y, 26);
    glint.addColorStop(0, "rgba(255,246,228,.85)"); glint.addColorStop(1, "rgba(255,246,228,0)");
    ctx.fillStyle = glint; ctx.fillRect(x - 26, y - 26, 52, 52);
  });
}

export default function CinematicSequence() {
  const root = useRef<HTMLDivElement>(null);
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const videos = [videoA, videoB];
  const current = useRef(0);
  const active = useRef(0);
  const moving = useRef(false);
  const finishing = useRef(false);
  const [phase, setPhase] = useState<Phase>("loading");
  const [scene, setScene] = useState(0);
  const [menuHitActive, setMenuHitActive] = useState(false);

  useEffect(() => {
    const host = root.current!;
    let mounted = true;
    let nextPreloadTimer: ReturnType<typeof setTimeout> | undefined;
    let finalHoldTimer: ReturnType<typeof setTimeout> | undefined;

    const cleanVideo = (video: HTMLVideoElement) => {
      video.pause(); video.removeAttribute("src"); video.load();
    };
    const assignScene = (index: number, slot: number) => {
      if (index >= clips.length) return;
      const video = videos[slot].current!;
      if (video.getAttribute("src") === clips[index].src) return;
      video.src = clips[index].src; video.preload = "auto"; video.load();
    };
    const bufferedAhead = (video: HTMLVideoElement) => video.buffered.length
      ? video.buffered.end(video.buffered.length - 1) - video.currentTime : 0;
    const waitForStableStart = (video: HTMLVideoElement) => new Promise<void>((resolve) => {
      let settled = false;
      const finishWait = () => {
        if (settled) return;
        settled = true; clearInterval(poll); clearTimeout(fallback); resolve();
      };
      const check = () => {
        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA && bufferedAhead(video) >= 1.25) finishWait();
      };
      const poll = setInterval(check, 60);
      const fallback = setTimeout(finishWait, 3500);
      video.addEventListener("canplaythrough", finishWait, { once: true });
      video.addEventListener("progress", check);
      video.addEventListener("loadeddata", check);
      check();
    });
    const preloadFollowing = (index: number) => {
      clearTimeout(nextPreloadTimer);
      nextPreloadTimer = setTimeout(() => {
        if (mounted) assignScene(index + 1, 1 - active.current);
      }, index === 0 ? 650 : 150);
    };
    const finish = () => {
      if (!mounted || finishing.current) return;
      finishing.current = true; setPhase("transition");
      clearTimeout(nextPreloadTimer); clearTimeout(finalHoldTimer);
      const menu = document.getElementById("menu");
      gsap.to(host, { opacity: 0, scale: 0.985, duration: 0.9, ease: "power2.inOut", onComplete: () => {
        videos.forEach((video) => video.current && cleanVideo(video.current));
        setPhase("done"); history.replaceState(null, "", "#menu"); menu?.scrollIntoView({ behavior: "auto", block: "start" }); menu?.focus({ preventScroll: true });
      }});
    };
    const playScene = async (index: number) => {
      const video = videos[active.current].current!;
      assignScene(index, active.current);
      if (index === 0) await waitForStableStart(video);
      if (!mounted) return;
      try {
        await video.play(); setPhase("playing"); gsap.set(video, { opacity: 1 });
        gsap.to(host.querySelector(".cinematic-poster"), { opacity: 0, duration: 0.2 }); preloadFollowing(index);
      } catch { finish(); }
    };
    const advance = () => {
      if (!mounted || moving.current || finishing.current) return;
      const next = current.current + 1;
      if (next >= clips.length) { finalHoldTimer = setTimeout(finish, 450); return; }
      const outgoing = videos[active.current].current!;
      const incomingSlot = 1 - active.current;
      const incoming = videos[incomingSlot].current!;
      if (incoming.getAttribute("src") !== clips[next].src) assignScene(next, incomingSlot);
      const beginTransition = () => {
        if (!mounted || moving.current) return;
        moving.current = true; incoming.currentTime = 0;
        void incoming.play().then(() => {
          const completesCut = clips[current.current].src === "/cinematic/scene-05-v1.mp4" && clips[next].src === "/cinematic/scene-06-v1-original.mp4";
          if (completesCut) {
            incoming.pause();
            const canvas = host.querySelector<HTMLCanvasElement>(".cut-canvas")!;
            const runCuts = () => {
              if (!mounted) return;
              canvas.width = incoming.videoWidth; canvas.height = incoming.videoHeight;
              const cuts = { a: 0, b: 0 };
              const render = () => drawCuts(canvas, incoming, [cuts.a, cuts.b]);
              render(); gsap.set(canvas, { opacity: 1 });
              gsap.timeline({ onUpdate: render, onComplete: () => {
                outgoing.pause(); gsap.set(canvas, { opacity: 0 }); active.current = incomingSlot; current.current = next; setScene(clips[next].scene);
                moving.current = false; void incoming.play(); preloadFollowing(next);
              }})
                .to(cuts, { a: 1, duration: .42, ease: "power2.inOut" })
                .to(cuts, { b: 1, duration: .42, ease: "power2.inOut" }, "+=.08")
                .to(incoming, { opacity: 1, duration: .18, ease: "none" }, "+=.05")
                .to(outgoing, { opacity: 0, duration: .18, ease: "none" }, "<");
            };
            if (incoming.currentTime === 0) runCuts();
            else { incoming.addEventListener("seeked", runCuts, { once: true }); incoming.currentTime = 0; }
            return;
          }
          if (clips[current.current].scene === clips[next].scene || clips[next].directCut) {
            gsap.set(incoming, { opacity: 1 }); gsap.set(outgoing, { opacity: 0 }); outgoing.pause();
            active.current = incomingSlot; current.current = next; setScene(clips[next].scene);
            moving.current = false; preloadFollowing(next); return;
          }
          gsap.timeline({ onComplete: () => {
            outgoing.pause(); outgoing.style.opacity = "0"; active.current = incomingSlot;
            current.current = next; setScene(clips[next].scene); moving.current = false; preloadFollowing(next);
          }}).to(incoming, { opacity: 1, duration: 0.12, ease: "none" }, 0)
            .to(outgoing, { opacity: 0, duration: 0.12, ease: "none" }, 0);
        }).catch(() => { moving.current = false; active.current = incomingSlot; current.current = next; void playScene(next); });
      };
      if (incoming.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) beginTransition();
      else incoming.addEventListener("canplay", beginTransition, { once: true });
    };
    const updateMenuHitArea = () => {
      const video = videos[active.current].current;
      setMenuHitActive(current.current === 4 && !!video && video.currentTime >= 3.35);
    };
    (host as HTMLDivElement & { skip?: () => void }).skip = finish;
    videos.forEach((video) => video.current?.addEventListener("ended", advance));
    videos.forEach((video) => video.current?.addEventListener("timeupdate", updateMenuHitArea));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) finish(); else void playScene(0);

    return () => {
      mounted = false; clearTimeout(nextPreloadTimer); clearTimeout(finalHoldTimer); gsap.killTweensOf(host);
      videos.forEach((video) => { if (video.current) { video.current.removeEventListener("ended", advance); video.current.removeEventListener("timeupdate", updateMenuHitArea); cleanVideo(video.current); } });
    };
  }, []);

  if (phase === "done") return null;
  const skip = () => (root.current as (HTMLDivElement & { skip?: () => void }) | null)?.skip?.();
  return <div ref={root} className="cinematic" data-phase={phase} data-scene={scene + 1}>
    <img className="cinematic-poster" src="/assets/menu/pizzas/donatello.webp" alt="" />
    <video ref={videoA} className="cinematic-video is-a" muted playsInline preload="auto" aria-label={`Donatello pizza filmi, sahne ${scene + 1}`} />
    <video ref={videoB} className="cinematic-video is-b" muted playsInline preload="none" aria-hidden="true" />
    <canvas className="cinematic-video cut-canvas" aria-hidden="true" />
    {menuHitActive && <div className="scene-six-hit-layer"><button type="button" aria-label="Menüye geç" onClick={skip} /></div>}
    <button className="cinematic-skip" onClick={skip}>MENÜYE GEÇ ↗</button>
  </div>;
}
