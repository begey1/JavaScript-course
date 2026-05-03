const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.onclick = () => {
    menu.classList.toggle("active");
};

let index = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;

// dots
const dotsContainer = document.getElementById("dots");

for (let i = 0; i < total; i++) {
    let dot = document.createElement("span");
    dot.onclick = () => moveTo(i);
    dotsContainer.appendChild(dot);
}

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function moveTo(i) {
    index = i;
    updateSlider();
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % total;
    updateSlider();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + total) % total;
    updateSlider();
};

setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
}, 3000);
