const bg = document.querySelector("body");
const images = [
    "photo-1553649033-3fbc8d0fa3cb.avif",
    "photo-1553696590-4b3f68898333.avif",
    "photo-1553702446-a39d6fbee6cb.avif",
    "photo-1553773077-91673524aafa.avif",
    "photo-1553774651-905c1bc85a56.avif",
    "photo-1553785063-9e892a3f15b6.avif",
    "photo-1553901753-215db344677a.avif",
];

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    bg.style.background = "url(./images/" + images[randomIndex] + ")";
}

randomImage();
