let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".main-nav");

function handleClick() {
  toggle.classList.toggle("open");
  navigation.classList.toggle("show");
}

toggle.addEventListener("click", handleClick);
