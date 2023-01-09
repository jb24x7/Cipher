let UserInput = prompt("Enter a sentence:");
// const firstLetter = UserInput.charAt(0);
// const lastLetter = UserInput.at(-1);


function firstandlastletter(UserInput) {
let first = UserInput.charAt(0);
let last = UserInput.charAt(UserInput.lenght-1);
console.log(last);
newSent = first.toUpperCase() + last.toUpperCase();
console.log(newSent);

}

firstandlastletter(UserInput);





