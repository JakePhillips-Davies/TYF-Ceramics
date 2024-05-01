const imageContainerGallery = document.getElementById(`galleryImages`);

fetch(`assets/gallery.json`).then(function (result) {
    result.json().then(function (json) {
        setupGallery(json);
    })
})

function setupGallery(json) {
    
    // Append all images into the container
    json.forEach(jsonImage => {
        var image = document.createElement(`img`);
        image.setAttribute(`alt`, jsonImage.caption);
        image.setAttribute(`title`, jsonImage.caption);
        image.setAttribute(`src`, jsonImage.url);

        var captionBox = document.createElement(`p`);
        captionBox.innerText = jsonImage.caption;

        var container = document.createElement(`span`);

        container.appendChild(image);
        container.appendChild(captionBox);
        imageContainerGallery.appendChild(container);
    });
    
}