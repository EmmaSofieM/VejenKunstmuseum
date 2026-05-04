import Lenis from "lenis";

const lenis = new Lenis({
  lerp: 0.075,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.lenis = lenis;
