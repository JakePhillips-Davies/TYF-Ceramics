const newsletterText = document.getElementById(`newsletterTextbox`);
const newsletterButton = document.getElementById(`newsletterButton`);

fetch(`assets/newsletter.json`).then(function (result) {
    result.json().then(function (json) {
        setupNewsletter(json);
    })
})


function setupNewsletter(json) {
    console.log(json);
    newsletterButton.addEventListener(`click`, function (e) {
        e.preventDefault();

        var email = { email: "" };
        email.email = newsletterText.value;

        json.push(email);
    });
}
