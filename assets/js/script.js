// Parallax for logo "ask.Js"

let bg = document.querySelector('.parallax');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

});

// Loading animation for a loading qube.

document.onreadystatechange = function () {
    // Set timeout function for a 2 sec.
    setTimeout(function () {
        if (document.readyState !== "complete") {
            document.querySelector(
                "body").style.visibility = "hidden";
            document.querySelector(
                ".logo").style.visibility = "hidden";
            document.querySelector(
                "#loader-wrapper").style.visibility = "visibe";
        } else {
            document.querySelector(
                "#loader-wrapper").style.display = "none";
            document.querySelector(
                "body").style.visibility = "visible";
            document.querySelector(
                ".logo").style.visibility = "visible";
        }
    }, 2000);
};