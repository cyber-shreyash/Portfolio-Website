const up = document.getElementById("hamburger");
const leftbox = document.getElementById("leftbox");

up.addEventListener("click", () => {
    leftbox.classList.toggle("active");
});
