function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();


var crsr = document.querySelector("#cursur");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});

// const h4Elements = document.querySelectorAll(".h4-tooltip");

// h4Elements.forEach((h4) => {
//   h4.addEventListener("mouseover", () => {
//     const tooltip = h4.querySelector(".tooltip");
//     tooltip.style.display = "block";
//     tooltip.style.opacity = "1";
//   });

//   h4.addEventListener("mouseout", () => {
//     const tooltip = h4.querySelector(".tooltip");
//     tooltip.style.display = "none";
//   });
// });

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: ".main",
    scrub: 4,
    start: "top 30%",
    end: "top 0",
  },
});
tl.to(
  "#page-1 h1",
  {
    x: -80,
    duration: 1,
  },
  "anim"
);
tl.to(
  "#page-1 h2",
  {
    x: 90,
    duration: 1,
  },
  "anim"
);
tl.to(
  "#page-1 video",
  {
    width: "90%",
    duration: 1,
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: ".main",
    scrub: 4,
    start: "top -100%",
    end: "top -180%",
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-3",
    scroller: ".main",
    scrub: 4,
    start: "top -280%",
    end: "top -180%",
  },
});

tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "250px";
    crsr.style.height = "250px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});
