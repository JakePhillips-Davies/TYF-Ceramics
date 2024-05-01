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
        imageContainerGallery.appendChild(image);
    });
    
}