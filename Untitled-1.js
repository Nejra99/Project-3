function goToTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
window.addEventListener("scroll", () => {

    const top_btn=document.getElementById("top-btn");
    if(top_btn !==null){

        top_btn.classList.toggle("show-button", window.scrollY>200);

    }
});
