const togertherPop = document.getElementById('together-pop');
const closeBtn = document.getElementById('close-popup');

window.addEventListener("load", () => {
    setTimeout(() => {
        togertherPop?.classList.add("active");
    }, 1500);
});

closeBtn?.addEventListener("click", () => {
    togertherPop?.classList.remove("active");
});

togertherPop?.addEventListener('click', (el) => {
    if (el.target === togertherPop){
        togertherPop.classList.remove("active");
    }
});