# Final cinematic delivery

The fixed playback order is `scene-01-web.mp4`, then `scene-02.mp4` through
`scene-06.mp4`. The original `scene-01.mp4` is retained unchanged.

Scene 1's web copy is H.264 High, yuv420p, 720x1280 at constant 24 fps, CRF 18,
slow preset, two-second closed GOP (`keyint=48`), no audio, and MP4 faststart.
The player waits for at least 1.25 seconds of buffered media before first play,
then starts loading scene 2 after scene 1 has been playing for 650 ms. Every later
scene preloads only its immediate successor in the inactive buffer.

Playback order: scene-01-web, scene-02, scene-03-dikey, scene-05-v1, scene-05b-kesim,
scene-06-final. scene-01-poster.webp is scene 1's first frame, shown until playback starts.

scene-03-dikey is scene-03 (818x1126) rescaled frame by frame to 706x1304 so the pizza
holds the same size and centre as scenes 2 and 5 (radius 369 px at 359,651); the top
and bottom bands come from the neighbouring scenes' table.

scene-05b-kesim (Pika 2.5 keyframes 4 -> 6 -> 8 slices, one hand and one pizza wheel)
was rescaled to sit pixel-aligned between scenes 5 and 6.

scene-06-final is scene-06-v1-original with the baked-in "MENÜ" button painted out
from 3.36 s. The region the lifted slice travels through (right of the vertical cut,
above the upper-right diagonal) is taken from a Pika 2.5 keyframe regeneration in which
the slice keeps its toppings; the rest of the frame is the original.

Two persistent native video elements crossfade between clips: 120 ms by default,
300 ms into and out of the cut clip to hide texture differences between generations.
After the last clip its final frame holds for 450 ms and the cinematic layer recedes
over 900 ms. Skip uses the same direct website transition.
