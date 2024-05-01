const imageContainer = document.getElementById(`carouselImages`);
const caption = document.getElementById(`carouselCaption`);
const previous = document.getElementById(`carouselPrev`);
const next = document.getElementById(`carouselNext`);

const imageWidthRatio = 2.5;

var currentImage = 0;


fetch(`assets/carousel.json`).then(function (result) {
    result.json().then(function (json) {
        setupCarousel(json);
    })
})

function setupCarousel(json) {
    
    // Append all images into the container
    json.forEach(jsonImage => {
        var image = document.createElement(`img`);
        image.setAttribute(`alt`, jsonImage.caption);
        image.setAttribute(`title`, jsonImage.caption);
        image.setAttribute(`src`, jsonImage.url);
        image.style.width = 100 / json.length + "%";
        imageContainer.appendChild(image);
    });

    // Set the size of the container
    imageContainer.style.width = json.length * 100 + "%";
    imageContainer.style.aspectRatio = imageWidthRatio * json.length + " / 1";

    // Set initial caption
    caption.innerText = json[0].caption;

    // Set up the next and previous buttons
    previous.addEventListener(`click`, function () {
        
        if(currentImage > 0) {
            currentImage--;
        }
        else {
            currentImage = json.length - 1;
        }

        imageContainer.style.left = "-" + currentImage * 100 + "%";

        caption.innerText = json[currentImage].caption;

    })
    next.addEventListener(`click`, function () {
        
        if(currentImage < json.length - 1) {
            currentImage++;
        }
        else {
            currentImage = 0;
        }

        imageContainer.style.left = "-" + currentImage * 100 + "%";

        caption.innerText = json[currentImage].caption;

    })

}