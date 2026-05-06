const popup = document.getElementById("author-popup");
const closeBtn = document.getElementById('close-popup');

window.addEventListener("load", () => {
    setTimeout(() => {
        popup?.classList.add("active");
    }, 1500);
});