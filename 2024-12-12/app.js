// ******** Anagram Detection ********

/* An anagram is the result of rearranging the letters of a word to produce a new word.

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. Note: anagrams are case insensitive

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

let isAnagram = function(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  return test === original ? true : false;
};