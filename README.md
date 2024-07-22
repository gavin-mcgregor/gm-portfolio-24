# Gavin McGregor Portfolio July 2024

## Website Build

- Astro.js
- Netlify

## Canvas Anim

The ascii anim is being created by drawing a cicle on a small canvas offscreen and adding a conic gradient from black to white, then a smaller circle is created and rotated creating the rings. Then the pixel information from that canvas is copied to the main canvas, converted to a brightness value, swapped for an ascii character in the brightness array key and drawn to scale.
