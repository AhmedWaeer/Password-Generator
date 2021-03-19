let generateBtn = document.querySelector("#generate");


let arrayFromLowToHigh = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
};

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

// Write password to the #password input

function writePassword() {
    let userChoice1 = window.prompt("insert characters amount");
    let userChoice2 = window.prompt("UpperCase included?");
    let userChoice3 = window.prompt("Symbols included?");
    let userChoice4 = window.prompt("Numbers included?");
    let password = generatePassword(userChoice1, userChoice2, userChoice3, userChoice4);
    let passwordText = document.querySelector("#password");
    passwordText.value = password;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generatePassword = (
    userChoice1,
    userChoice2,
    userChoice3,
    userChoice4
) => {
    let charCodes = LOWERCASE_CODES;
    if (userChoice2 === "yes") charCodes = charCodes.concat(UPPERCASE_CODES);
    if (userChoice4 === "yes") charCodes = charCodes.concat(SYMBOL_CODES);
    if (userChoice3 === "yes") charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < userChoice1; i++) {
        const characterCode =
            charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}