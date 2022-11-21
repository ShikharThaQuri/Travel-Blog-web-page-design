let num = 1;

function yourFunction() {
  if (num == 1) {
    slide.style.transform = "translateX(-66.5rem)";
    num++;
    btn[0].classList.remove("active");
    btn[1].classList.add("active");
  } else if (num == 2) {
    slide.style.transform = "translateX(-133rem)";
    num++;
    btn[1].classList.remove("active");
    btn[2].classList.add("active");
  }
}

function myFunction() {
  if (num == 3) {
    slide.style.transform = "translateX(-66.5rem)";
    num--;
    btn[2].classList.remove("active");
    btn[1].classList.add("active");
  } else if (num == 2) {
    slide.style.transform = "translateX(0)";
    num--;
    btn[1].classList.remove("active");
    btn[0].classList.add("active");
  }
}

// ------------------ Second

let num2 = 1;

function twoFunction() {
  if (num2 == 1) {
    slide2.style.transform = "translateX(-66.5rem)";
    num2++;
    btn2[0].classList.remove("active-2");
    btn2[1].classList.add("active-2");
  } else if (num2 == 2) {
    slide2.style.transform = "translateX(-133rem)";
    num2++;
    btn2[1].classList.remove("active-2");
    btn2[2].classList.add("active-2");
  }
}

function oneFunction() {
  if (num2 == 3) {
    slide2.style.transform = "translateX(-66.5rem)";
    num2--;
    btn2[2].classList.remove("active-2");
    btn2[1].classList.add("active-2");
  } else if (num2 == 2) {
    slide2.style.transform = "translateX(0)";
    num2--;
    btn2[1].classList.remove("active-2");
    btn2[0].classList.add("active-2");
  }
}
