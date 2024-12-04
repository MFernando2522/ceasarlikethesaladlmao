//Name: Marc F
//Date: 12/3/2024
//Caesar Cipher YEAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//YT links I definet didnt use for inference (guys I swear I totally didnt get the math and some code from tutorials ahahahaha):
//https://www.youtube.com/watch?v=98jrwInuefY
//https://www.youtube.com/watch?v=bRvJKzMVc6U

//Shoutout to list indexing the goat 
//---Hard code/my thought process and ideans I had for this---:
//  get elements here, to call from HTML
//  button code with addEvent Listener
//  function - for loop and stuff here

//-------------------------------------------------------------------
// Grab HTML elements so we can mess with them fr
let textInput = document.getElementById("textInput"); // The text box where users type
let direction = document.getElementById("direction"); // Dropdown to pick encrypt or decrypt
let shift = document.getElementById("shift"); // Number input for shift amount
let output = document.getElementById("output"); // Place to show the result
let buttonSubmittion = document.getElementById("buttonSubmittion"); // Button to make the magic happen

// this stuff here just addin an event listener to the button
buttonSubmittion.addEventListener("click", function () {
    // Get user input and options
    let text = textInput.value; // What the user typed obv lmao
    let shiftValue = Number(shift.value); // Get the shift amount (convert to a number)
    let action = direction.value; // Are we encrypting or decrypting ahh questin

    // thi all the all the uhhhh... cipher function to do the work
    let resultList = caesarCipherToList(text, shiftValue, action);

    // Makin the result and shows it only AFTER going through the function and doing function sstuff
    output.textContent = resultList.join();

});

// ok so bashicaly Caesar Cipher function that works with a lis
function caesarCipherToList(text, shift, action) {
    let resultList = []; // Create an empty list to store the resultuh INDEXING YEAHHHH

    // If thy decrypting, flip the shift direction
    if (action === "decrypt") {
        shift = -shift; // Reverse thy shift by making it negati v :P
    }

    // Loop which obv does the do for the loping each character in the text, im losing it 
    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Get the current character to use basichally a stored value yay

        // Check if it's a letter (we only cipher letters)
        //I HATE Regex tbh, hot take
        if (char.match(/[a-zA-Z]/)) { 
            let charCode = char.charCodeAt(0); // Get the ASCII code of the letter

            // Cipher uppercase letters yuh
            if (char >= "A" && char <= "Z") { //check if thine case is upper
                //basically adds the shift given, wasnt too hard as I thought the shift would be tbh
                let newCode = ((charCode - 65 + shift + 26) % 26) + 65; // Do math to shift, which I totally didnt take from the video that I linked
                char = String.fromCharCode(newCode); // Convert the new code back to a letter
            }
            // Cipher lowercase lettr
            else if (char >= "a" && char <= "z") { //check if thyine is lowr
                let newCode = ((charCode - 97 + shift + 26) % 26) + 97; // Similar math for lowercase
                char = String.fromCharCode(newCode); // Convert it back
            }
        }

        // Add the character to the result list, I LOVE INDEXING yeahhhh wooo uh huh
        resultList.push(char);
    }

    return resultList; // Return the final list of characters
}