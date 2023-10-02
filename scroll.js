
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

const letterM = function () {
    const element0 = document.querySelectorAll("svg > g > g > g[opacity = '0']");
    const element1 = document.querySelectorAll("svg > g > g > g[opacity = '1']");
    let randomEl = Math.floor(Math.random() * element0.length);
    element0[randomEl].setAttribute("opacity", "1");

    randomEl = Math.floor(Math.random() * element1.length);
    element1[randomEl].setAttribute("opacity", "0");

}
setInterval(letterM, 200);