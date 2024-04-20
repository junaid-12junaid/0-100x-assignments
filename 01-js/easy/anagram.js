/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1=str1.split(" ").join("").toLowerCase()
  str2=str2.split(" ").join("").toLowerCase()

  if(str1.length!==str2.length) return false
   let map1=new Map(),map2=new Map()
   for(let i of str1){
    if(map1.has(i)){
      map1.set(i,map1.get(i)+1)
    }else{
      map1.set(i,1)
    }
   }

   for(let i of str2){
    if(map2.has(i)){
      map2.set(i,map2.get(i)+1)
    }else{
      map2.set(i,1)
    }
   }

   for(let [k,v] of map1){
    if(!map2.has(k)) return false
    if(map2.get(k)!==v) return false
   }

   return true
   
}

// console.log(isAnagram('rail safety', 'fairy tales'))

module.exports = isAnagram;
