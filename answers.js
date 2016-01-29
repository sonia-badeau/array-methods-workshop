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

var getPositives = newArray.filter(function(number){
        if (number > 0){
            console.log(number);
        }
    })
    

