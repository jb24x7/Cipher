let userInput = prompt("Enter a sentence:");
let testString = "";

function firstandlastletter(first, last) {

first = userInput.charAt(0);
last = userInput.charAt(userInput.length-1);

newSent = first.toUpperCase() + last.toUpperCase();

return newSent;
}

  function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", 
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function adding()

testString = firstandlastletter(userInput);
alert(reverseString(testString));







