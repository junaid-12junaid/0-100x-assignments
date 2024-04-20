/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    str=str.split(" ").join("").toLowerCase()
    let count=0
    for(let i of str){
      if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u") count+=1
    }

    return count
}

module.exports = countVowels;