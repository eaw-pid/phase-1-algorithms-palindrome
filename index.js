function isPalindrome(word) {
  // Write your algorithm here
  let splitString=word.split("");
  let reverseArray = splitString.reverse();
  let reversedWord = reverseArray.join("");
  
  if(reversedWord === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
   first need to find a method to flip a string
   compare the flipped string to 'word' parameter 
   if 'true' return true; if false return 'false' 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
