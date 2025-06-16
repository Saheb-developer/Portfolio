// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// GSAP Animations
gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8
});

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 1
  });
});
