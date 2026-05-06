const popup = document.getElementById("author-popup");
const closeBtn = document.getElementById('close-popup');

window.addEventListener("load", () => {
    setTimeout(() => {
        popup?.classList.add("active");
    }, 1500);
});

closeBtn?.addEventListener("click", () => {
    popup?.classList.remove("active");
});