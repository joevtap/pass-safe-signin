const preLoader = anime({
  targets: [".pre_loader"],
  easing: "easeInOutExpo",
  duration: 1500,
  opacity: 0,
  autoplay: false,
});

window.addEventListener("load", () => {
  preLoader.play();
  document
    .querySelector(".pre_loader")
    .setAttribute("style", "pointer-events: none");
});

const illustration = anime.timeline({
  easing: "easeInOutExpo",
});

illustration
  .add({
    targets: ["#floor", "#door", "#lock", "#keys"],
    translateY: ["100%", 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(200, { start: 500 }),
  })
  .add(
    {
      targets: ["#person", "#shadow", "#plant"],
      translateY: ["100%", 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(200),
    },
    "-=800"
  )
  .add(
    {
      targets: ["#pictures", "#window"],
      translateX: ["100%", 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),
    },
    "-=400"
  )
  .add({
    targets: ["#checkbox"],
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
  });

const leftPanel = anime({
  targets: ".left",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  duration: 800,
  easing: "easeInOutQuart",
});

const nav = anime({
  targets: [".logo", ".nav_items li"],
  delay: anime.stagger(100, { start: 1000 }),
  translateX: [-50, 0],
  easing: "easeInOutQuart",
  opacity: [0, 1],
  duration: 600,
});
