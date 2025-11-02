/*PROBLEM:
The goal of this exercise is to convert a string to a new string 
where each character in the new string is 
"(" if that character appears only once in 
the original string, or ")" if that character 
appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.*/

function duplicateEncode(word){
    // ...
  let smallWord = word.toLowerCase();
  
  let unique = [...new Set(smallWord)];
  
  let encode = {};

  
  let count = 0;
  
  for (let x = 0; x < unique.length; x++){
    for(let y = 0; y < smallWord.length; y++){
      if(unique[x] === smallWord[y]){
        count++
      }
    }
  encode[unique[x]] = count > 1 ? ')' : '(';
  count = 0
  }
  
  
  let char = smallWord.split('');
  
  
  for(let x = 0; x < char.length; x++){
    if(char[x] in encode){
      char[x] = encode[char[x]]; 
    }
  }
  
  return char.join('')
}