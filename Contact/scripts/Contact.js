
const inputs = document.querySelectorAll(".input");
const btnEl = document.querySelector(".btn");
btnEl.disabled = true;

inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    checkInput();
  })
})

function checkInput() {
  inputs.forEach((input) => {
    if (input.value === "") {
      btnEl.disabled = true;
      return;
    } else {
      btnEl.disabled = false;
      return;
    }
  })
}

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

