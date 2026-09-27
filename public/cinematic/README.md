# Final cinematic delivery

The fixed playback order is `scene-01-web.mp4`, then `scene-02.mp4` through
`scene-06.mp4`. The original `scene-01.mp4` is retained unchanged.

Scene 1's web copy is H.264 High, yuv420p, 720x1280 at constant 24 fps, CRF 18,
slow preset, two-second closed GOP (`keyint=48`), no audio, and MP4 faststart.
The player waits for at least 1.25 seconds of buffered media before first play,
then starts loading scene 2 after scene 1 has been playing for 650 ms. Every later
scene preloads only its immediate successor in the inactive buffer.

Two persistent native video elements provide 120 ms scene crossfades. Between
scene 5 and scene 6 a canvas reveals scene 6's first frame along its two diagonal
cuts (pixel-aligned with scene 5's last frame), then crossfades into playback. After scene
6, its last frame holds for 450 ms and the cinematic layer recedes over 900 ms.
There is no intermediate HTML hero. Skip uses the same direct website transition.
