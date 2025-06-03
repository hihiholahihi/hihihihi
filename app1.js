let imagess = document.querySelectorAll("img")
let wrapper = document.getElementById("wrapperr")
let imgWrapper = document.getElementById("fullImg")
let close = document.getElementById("spann")

var data = {
    "images": [{
        "image1": "images/residual1/img1.jpg"
    }, {
        "image1": "images/residual1/img2.jpg"
    }, {
        "image1": "images/residual1/img3.jpg"
    }, {
        "image1": "images/residual1/img4.jpg"
    }, {
        "image1": "images/residual1/img5.jpg"
    }, {
        "image1": "images/residual1/img6.jpg"
    }, {
        "image1": "images/residual1/img7.jpg"
    }, {
        "image1": "images/residual1/img8.jpg"
    }, {
        "image1": "images/residual1/img9.jpg"
    }, {
        "image1": "images/residual1/img10.jpg"
    }, {
        "image2": "images/residual2/img1.jpg"
    }, {
        "image2": "images/residual2/img2.jpg"
    }, {
        "image2": "images/residual2/img3.jpg"
    }, {
        "image2": "images/residual2/img4.jpg"
    }, {
        "image2": "images/residual2/img5.jpg"
    }, {
        "image2": "images/residual2/img6.jpg"
    }, {
        "image2": "images/residual2/img7.jpg"
    }, {
        "image2": "images/residual2/img8.jpg"
    }, {
        "image2": "images/residual2/img9.jpg"
    }, {
        "image2": "images/residual2/img10.jpg"
    },]
};

close.addEventListener("click", () => (wrapper.style.display = "none"));


data.images.forEach(function (obj, index) {
    var image = new Image();
    image.src = obj.image1;
    document.getElementById("wrapperr").appendChild(image);
})

imagess.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/residual${index}/img${index}.jpg`);
    });
});

function openModal() {
    wrapper.style.display = "flex";
}