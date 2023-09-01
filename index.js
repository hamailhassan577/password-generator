const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.querySelector("#password-one")
let passTwoEl = document.querySelector("#password-two")
let passwordOne = ""
let passwordTwo = ""
let buttonEl = document.querySelector("#pass-gen-btn")
let messageElem = document.querySelector('#message');
const resetBtn = document.querySelector('#reset-btn')


buttonEl.addEventListener("click", generatePassword)
resetBtn.addEventListener('click', reset)

// To add the copy functionality on the first input
passOneEl.addEventListener('click', (e) => {
    copyToClipboard(e);
})

// To add the copy functionality on the second input 
passTwoEl.addEventListener('click', (e) => {
    copyToClipboard(e);
})



// Main password generating function
function generatePassword() {

    // Checking if there is already a password in the input
if(passwordOne.length>0 && passwordTwo.length>0) {
    passwordOne = ""
    passwordTwo = ""
}

// Generating password for the first field
for ( let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random()*characters.length)
    passwordOne += characters[randomIndex]
}

// Generating password for the second field
for ( let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random()*characters.length)
    passwordTwo += characters[randomIndex]
}

// Displaying the generated passwords in respective fields
passOneEl.value = passwordOne
passTwoEl.value = passwordTwo

}

// Main copy function to copy text to clipboard
function copyToClipboard(elem) {
    elem = elem.target

    // Select the text field
    elem.select(); 
    elem.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(elem.value);
    messageElem.style.visibility = "visible";
    messageElem.textContent = 'Copied to clipboard succesfully'
  
} 

function reset() {
    messageElem.textContent = ""
    passTwoEl.value = "******"
    passOneEl.value = "******"
}