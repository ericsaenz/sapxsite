let dots = document.getElementsByClassName("dot");

function slideTo(n) {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "";
    }
    dots[n].style.backgroundColor = "white";
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => slideTo(i);
}

slideTo(0);