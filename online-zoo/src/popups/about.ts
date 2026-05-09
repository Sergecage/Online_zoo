const popup = document.getElementById("author-popup");
const closeBtn = document.getElementById('close-popup');

window.addEventListener("load", () => {
    setTimeout(() => {
        popup?.classList.add("active");
    }, 15000);
});

closeBtn?.addEventListener("click", () => {
    popup?.classList.remove("active");
});

popup?.addEventListener('click', (el) => {
    if (el.target === popup){
        popup.classList.remove("active");
    }
});