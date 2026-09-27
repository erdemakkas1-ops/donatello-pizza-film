# Donatello cinematic asset manifest

Created before application implementation. All food imagery is illustrative concept imagery, not verified Donatello products.

## Required transparent layers

- dough-base — ASSET REQUIRED; planned states atlas cell 0,0.
- ladle-with-sauce — ASSET REQUIRED; planned props atlas cell 0,0.
- sauce-stream — ASSET REQUIRED; planned props atlas cell 1,0.
- sauced-dough — ASSET REQUIRED; planned states atlas cell 1,0.
- ingredient-mozzarella — ASSET REQUIRED; props cell 0,1.
- ingredient-basil — ASSET REQUIRED; props cell 1,1.
- ingredient-mushroom — ASSET REQUIRED; props cell 2,1.
- ingredient-pepperoni — ASSET REQUIRED; props cell 0,2.
- ingredient-tomato — ASSET REQUIRED; props cell 1,2.
- topped-pizza — ASSET REQUIRED; states cell 0,1.
- baked-pizza — ASSET REQUIRED; states cell 1,1 / standalone photo.
- pizza-cutting-tool — ASSET REQUIRED; professional rotary cutter, props cell 2,0.
- cut-pizza-base — planned complementary clip masks of baked-pizza.
- isolated-slice — planned independent DOM layer clipped from same baked-pizza for exact alignment.
- cheese-strands — ASSET REQUIRED; props cell 2,2.
- menu thumbnails — planned illustrative shared baked-pizza; individual actual product photographs ASSET REQUIRED.

All generated assets require genuine alpha and visual inspection. Atlases are rendered with CSS background positioning; no CSS food illustrations, emoji food, simulated yellow cheese lines, or red rectangular sauce substitutes.

## Architecture

React + TypeScript; GSAP with one ScrollTrigger-controlled master timeline; one Lenis instance. Pinned stage is 100svh, scroll maps to a reversible playhead. DOM image transforms, opacity and clip masks only. Menu remains semantic HTML outside the pinned scene and is revealed by scene morph. No Three.js, canvas, image sequence, scroll-driven React state, or per-object triggers.

## Timeline (normalized seconds)

0–1.2 dough / introduction; 1.2–3.3 ladle and sauce; 3.3–5 ingredients; 5–6 baking; 6–8.5 cutter and brand mask; 8.5–11.3 slice and cheese; 11.3–14 pizza to menu.

Reduced motion skips the pinned animation and exposes the menu immediately. Mobile composition targets 390×844 and widths 320, 360, 375, 390, 430.
