// animate to some values
gsap.to(".box", { 
  x: 1800,
  rotation: 360,
  scale: 1.2,
  duration: 1,
  repeat: 100, // with a repeat
  yoyo: true, 
  delay: 1,
  ease: "back.out"
});

// or from some values
// gsap.from(".box", { 
//   x: -200,
//   rotation: -360,
//   scale: 0,
//   duration: 1,
//   ease: "back.out"
// });

// or choose both the start and end values and animate between them
// gsap.fromTo(".box", {
//   x: -200,
//   rotation: -360,
//   scale: 0,
// },{ 
//   x: 200,
//   rotation: 360,
//   scale: 1.2,
//   duration: 1,
//   ease: "back.out"
// });
