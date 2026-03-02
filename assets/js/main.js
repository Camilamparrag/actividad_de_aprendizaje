const btnArriba = document.getElementById("btnArriba");

btnArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});