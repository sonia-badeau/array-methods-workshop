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


