let images = document.querySelectorAll("img")
let wrapper = document.getElementById("wrapperr")
let imgWrapper = document.getElementById("fullImg")
let close = document.getElementById("spann")

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/img${index}/img${index}.jpg`);
    });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
}