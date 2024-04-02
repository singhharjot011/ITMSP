let svc1 = document.querySelector(".svc1");
let svc2 = document.querySelector(".svc2");
let svc3 = document.querySelector(".svc3");
let svc4 = document.querySelector(".svc4");
let hide = document.querySelector(".hide");
let hide1 = document.querySelector(".hide1");
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");
let hide4 = document.querySelector(".hide4");
let seeMore1 = document.querySelector(".seeMore1");
let seeMore2 = document.querySelector(".seeMore2");
let seeMore3 = document.querySelector(".seeMore3");
let seeMore4 = document.querySelector(".seeMore4");
let clicked = false;

svc1.addEventListener("click", () => {
  if (!clicked) {
    svc2.style.display = "none";
    svc3.style.display = "none";
    svc4.style.display = "none";
    clicked = true;
    svc1.classList.add("test");
    svc1.classList.remove("svc");
    hide1.style.display = "inline";
    seeMore1.style.display = "none";
  } else {
    svc2.style.display = "flex";
    svc3.style.display = "flex";
    svc4.style.display = "flex";
    clicked = false;
    svc1.classList.remove("test");
    svc1.classList.add("svc");
    hide1.style.display = "none";
    seeMore1.style.display = "block";
  }
});

svc2.addEventListener("click", () => {
  if (!clicked) {
    svc1.style.display = "none";
    svc3.style.display = "none";
    svc4.style.display = "none";
    clicked = true;
    svc2.classList.add("test");
    svc2.classList.remove("svc");
    hide2.style.display = "inline";
    seeMore2.style.display = "none";
  } else {
    svc1.style.display = "flex";
    svc3.style.display = "flex";
    svc4.style.display = "flex";
    clicked = false;
    svc2.classList.remove("test");
    svc2.classList.add("svc");
    hide2.style.display = "none";
    seeMore2.style.display = "block";
  }
});

svc3.addEventListener("click", () => {
  if (!clicked) {
    svc2.style.display = "none";
    svc1.style.display = "none";
    svc4.style.display = "none";
    clicked = true;
    svc3.classList.add("test");
    svc3.classList.remove("svc");
    hide3.style.display = "inline";
    seeMore3.style.display = "none";
  } else {
    svc2.style.display = "flex";
    svc1.style.display = "flex";
    svc4.style.display = "flex";
    clicked = false;
    svc3.classList.remove("test");
    svc3.classList.add("svc");
    hide3.style.display = "none";
    seeMore3.style.display = "block";
  }
});

svc4.addEventListener("click", () => {
  if (!clicked) {
    svc2.style.display = "none";
    svc3.style.display = "none";
    svc1.style.display = "none";
    clicked = true;
    svc4.classList.add("test");
    svc4.classList.remove("svc");
    hide4.style.display = "inline";
    seeMore4.style.display = "none";
  } else {
    svc2.style.display = "flex";
    svc3.style.display = "flex";
    svc1.style.display = "flex";
    clicked = false;
    svc4.classList.remove("test");
    svc4.classList.add("svc");
    hide4.style.display = "none";
    seeMore4.style.display = "block";
  }
});
