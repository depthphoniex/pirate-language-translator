// take the value of diffrent works
var btnTranslate = document.querySelector("#btn-translate");
var txtInputArea = document.querySelector("#txt-area");
var outputValue = document.querySelector("#output-area")

// define server
var serverurl = "https://api.funtranslations.com/translate/pirate.json"


function gettranslationURL(text){
    return serverurl + "?" + "text=" + text
}

// alert when an error on server is coming
function errorHandler(error){
    console.log("error Occured" + error);
    alert("Some error occured in server! so please try again later. ")
}

// function calling and result show
function clickEventHandler(){
 var inputText = txtInputArea.value
 fetch (gettranslationURL(inputText)) .then(response => response.json())
 .then(json => {
     var output = json.contents.translated
     outputValue.innerText = output;
 })
 .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)