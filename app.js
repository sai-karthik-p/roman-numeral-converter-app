var inputField = document.querySelector("#input-field");
var translateBtn = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/roman-numerals.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something's wrong with the server! Please try again after some time.")
}

function clickHandler() {
    var inputText = inputField.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
}

translateBtn.addEventListener("click", clickHandler)