const shopFront = document.getElementById(`shopFront`);

fetch(shopFront.getAttribute(`src`)).then(function (result) {
    result.json().then(function (json) {
        setupShopFront(json);
    })
})

function setupShopFront(json) {

    if (json.length == 0) { //If there's nothing in the list, print a message and terminate the function
        var noStockMsg = document.createElement(`p`);
        noStockMsg.innerText = "Sorry, nothing here at the moment. Come back another time, or send a commission to my email!"

        shopFront.appendChild(noStockMsg);
        return;
    }

    json.forEach(shopItem => {
        
        // create a container for all the item' information
        var itemContainer = document.createElement(`div`);
        itemContainer.classList.add(`shop-item`);

        // create the image
        var image = document.createElement(`img`);
        image.setAttribute(`alt`, shopItem.title);
        image.setAttribute(`title`, shopItem.title);
        image.setAttribute(`src`, shopItem.imageUrl);
        itemContainer.appendChild(image);

        // create text container
        var textContainer = document.createElement(`div`)
        itemContainer.appendChild(textContainer);

        //create the title
        var title = document.createElement(`h3`);
        title.innerText = shopItem.title;
        textContainer.appendChild(title);

        // create the description
        var desc = document.createElement(`p`);
        desc.innerText = shopItem.description;
        desc.classList.add(`item-description`)
        textContainer.appendChild(desc);

        // create the price tag         ## just a text box for now, will eventually be a paypal link or something ##
        var price = document.createElement(`p`);
        price.innerText = "£" + shopItem.price;
        price.classList.add(`item-price`);
        textContainer.appendChild(price);

        shopFront.appendChild(itemContainer);

    });

}