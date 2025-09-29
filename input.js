// Uncomment the following lines one at a time, debug, and test your fixes.

/* ========================
    This file is called syntax.js
    run your code with 
    node input.js
========================= */

// Input Errors


function calculateTotal(price, quantity, discount) {
    return price * quantity - discount;
}




let totalCost = calculateTotal(10, 2, 3); 
console.log(totalCost)




let totalCost2 = calculateTotal(10, 2, 5); 
console.log(totalCost2)




function hello(name, age, city) {
    return "Hello, my name is " + name + ", I am " + age + " years old, and I live in " + city;
}

let greeting1 = hello("Alice", 27, "Albany"); 
console.log(greeting1);




let greeting2 = hello("Alice", 30, "New York"); 
console.log(greeting2);
