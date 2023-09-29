
window.addEventListener('scroll', function () {
    const navbar = document.querySelector("nav");
    const button = document.getElementsByTagName('button')[0]
    if (window.scrollY > 350) {
        navbar.style.backgroundColor = "white"; // Change to the desired background color
        button.style.backgroundColor = "#1a8917"
    } else {
        navbar.style.backgroundColor = "#ffc017";
        button.style.backgroundColor = "#191919";
    }
});