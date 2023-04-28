gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline()

tl.to(".loader", {
  delay: 1,
  opacity: 0,
  display: 'none'
})

tl.to(".lineOpener", {
  width: 0,
  duration: 1,
  ease: "power3.in"
})

tl.to(".loader1", {
  height: 0,
  duration: 1,
  ease: "power4.inOut"
})

tl.to(".loader2", {
  height: 0,
  duration: 1,
  ease: "power4.inOut"
}, "<")

tl.to(".loaderContainer", {
  zIndex: -1
})

tl.to("body", {
  height: "auto",
  overflow: "visible"
})

tl.to(".title, .link, .line", {
  position: 'relative',
  duration: 0
})

tl.from(".background-image", {
  y: 200,
  opacity: 0
})

tl.from(".title", {
  y: 200,
  opacity: 0
})

tl.from(".line", {
  width: 0
})

tl.from(".link", {
  x: 400,
  duration: 0.3,
  opacity: 0,
  stagger: 0.1
}, "-=0.5" /* offset this by minus .5s */)

tl.to(".link:not(:first-child)", {
  duration: 0.4,
  opacity: 0.4,
}, "+=0.3" /* add .3s offset here */)

// Image reveal on hover (ref: ds-k.site)

for (i = 0; i < document.querySelectorAll(".imageReveal p").length; i++) {

  const animation = gsap.to(document.querySelectorAll(".imageReveal__image")[i], {
    zIndex: 2,
    opacity: 1,
    scale: 1,
    ease: "power1.in",
    duration: 0.3
  });

  document.querySelectorAll(".imageReveal p")[i].addEventListener("mouseenter", () => animation.play());
  document.querySelectorAll(".imageReveal p")[i].addEventListener("mouseleave", () => animation.reverse());

  animation.reverse();

  document.querySelectorAll(".imageReveal p")[i].addEventListener("mousemove", moveText);
}

// Hero's interactive image

function moveText(e) {
  gsap.to(".imageReveal__container div", {
    x: e.offsetX,
    y: e.offsetY - 24,
    duration: 0.4,
    ease: "power3"
  })
}

document.querySelectorAll(".hero")[0].addEventListener("mouseleave", () => gsap.to(".background-image", {
  x: 0,
  y: 0,
  transform: "none",
  delay: 0.1
}));

document.querySelectorAll(".hero")[0].addEventListener("mousemove", (e) => gsap.to(".background-image", {
  x: (e.pageX - window.innerWidth / 2) / 5,
  y: (e.pageY - window.innerHeight / 2) / 5,
  duration: 0.5,
  ease: "power3",
  skewX: -(e.pageX - window.innerWidth / 2) / 100,
  skewY: -(e.pageY - window.innerHeight / 2) / 100,
  rotation: -(e.pageX - window.innerWidth / 2) / 50,
}));