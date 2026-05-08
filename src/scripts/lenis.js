import Lenis from "lenis";

const lenis = new Lenis({
  lerp: 0.2,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.lenis = lenis;
