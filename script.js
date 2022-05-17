let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
    nextSlide()
}, 5000);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const button = document.getElementById('btn');

button.addEventListener("mousemove", (e)=> {

    const posX = e.pageX - e.target.offsetLeft;
    const posY = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${posX}px`);
    e.target.style.setProperty("--y", `${posY}px`);

})