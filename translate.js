function translate (word){
    //Code #1 translate pig latin 
    //check to see if a vowel, start array with a const// word zero get the first letter in that word
    //when user put in text it will convert to lowercase with the below code
    //word=word.toLowerCase();
    //const vowels = ["a", "e", "i", "o","u"]
    //const firstletter = word[0]
   //if(vowels.includes(firstletter)){
       // word = word+"way"
        //return word
    }
    //Code for test #2 At least one test for words starting with one consonant.
//split the work up and splice
    //else{
//word=word.split("");
//let letter = word.splice(0,1)
//word.push(letter)
//word=word.join("")
//word=word+"ay"
//return word

//    }

//Code for test #3 - least one test for words starting with two consonants.

word=word.split("");
let letter = word.splice(0,2)
word.push(letter)
word=word.join("")
word=word+"ay"
return word
}
//Code for test #3 - least one test for words starting with 
//three consonants.
word=word.split("");
let letter = word.splice(0,3)
word.push(letter)
word=word.join("")
word=word+"ay"
return word
}
