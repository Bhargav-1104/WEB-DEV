// 1. Use logical operators to find whether age of person lies between 10 and 20
Name = "Bhargav";
age = 21;

if (age >= 10 && age <= 20) {
    console.log(Name + " is between 10 and 20");
} else {
    console.log(Name + " is not between 10 and 20");
}

// 2. Demonstrate the use of switch statement in javascript

switch (age){
    case 21:
        console.log("Age is 21");
        break;
    case 22:
        console.log("Age is 22");
        break;
    default:
        console.log("Age is not 21 or 22");
}

// 3. Write a js program to find whether number is divisible by 2 and 3

num = 10;
if (num % 2 == 0){
    console.log("Number is divisible by 2.");
}else if (num % 3 == 0){
    console.log("Number is divisible by 3.");
}else{
    console.log("Number is not divisible by 2 or 3.");
}

// Print based on age being greater than 18 

age >= 18 ? console.log("You can drive") : console.log("You cannot drive");
