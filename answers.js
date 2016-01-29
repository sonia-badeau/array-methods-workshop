//Exercise 1
//Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.
var numbers = [1,-45, 20, 30, -6];

function printPositives(number) {
    numbers.forEach(function(number) {
        if (number > 0){
            console.log(number);
        }
});
}
printPositives();

//other syntax

var numbers = [1,-45, 20, 30, -6];
var printPositives = numbers.forEach(function(number) {
        if (number > 0){
            console.log(number);
        }
});



//Exercise 2
//Similar to the previous exercise, write a function called getPositives that takes an array 
//and uses its filter method to return a new array with only the positive numbers

var newArray = [1,-90, 20, -30, -6];

var getPositives = newArray.filter(newFunction);  
 function newFunction(number){
        if (number > 0){
           return number;
        }
    }
    console.log(getPositives);

//Exercise 3
//Write a function called filterArray that takes an array AND a function as arguments. 
//Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
//NOTE: You are allowed to use Array.prototype.filter to answer this question.
//NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

function filterArray(array, func){
    return array.filter(func);
}

console.log(filterArray(newArray, newFunction));


//Exercise 4
//Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
//You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split to split the string into an array of words.

var sentence = "Learning JS is quite hard";
function longestWord(string){
    var split = sentence.split(" ");
    return split.reduce(function(acc, next){
        if (acc.length > next.length){
            return acc;
        }
        else {
            return next;
        }
    })
}
longestWord

//Exercise 5
//Write a function called countVowels that takes a string and returns the number of vowels in the string. 
//You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
//Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.

var sentence = "Learning JS is a little bit hard";
var vowels = ["a", "e", "i", "o", "u"];

function countVowels(string){
    var split = string.split("");
    var count = 0;
    
    split.forEach(function(currentLetter){
        var pos = vowels.indexOf(currentLetter);
        if (pos !== -1){
            count ++
        }
        
    });
    
    return count;
}

countVowels(sentence);