let userInput = prompt("Enter a sentence:");

function firstandlastletter(first, last) {
first = userInput.charAt(0);
last = userInput.charAt(userInput.length-1);

newSent = first.toUpperCase() + last.toUpperCase();

return newSent;
}

alert(firstandlastletter(userInput));





