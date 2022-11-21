// First
const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-66.5rem)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-133rem)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

// second

const btn2 = document.getElementsByClassName("btn-2");
const slide2 = document.getElementById("slide-2");

btn2[0].onclick = function () {
  slide2.style.transform = "translateX(0)";
  for (i = 0; i < 3; i++) {
    btn2[i].classList.remove("active-2");
  }
  this.classList.add("active-2");
};
btn2[1].onclick = function () {
  slide2.style.transform = "translateX(-66.5rem)";
  for (i = 0; i < 3; i++) {
    btn2[i].classList.remove("active-2");
  }
  this.classList.add("active-2");
};
btn2[2].onclick = function () {
  slide2.style.transform = "translateX(-133rem)";
  for (i = 0; i < 3; i++) {
    btn2[i].classList.remove("active-2");
  }
  this.classList.add("active-2");
};
