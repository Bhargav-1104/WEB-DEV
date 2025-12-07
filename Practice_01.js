//1. Creating a varialbe of type string and try to add a number to it

StringVariable = "Bhargav";
NumberVAriable = 21;

console.log(StringVariable + NumberVAriable);

//2. Use typeof operator to find the datatype of the string in last question

console.log(typeof StringVariable, typeof NumberVAriable, typeof (StringVariable+NumberVAriable));


// 3. create a const ongect in javascript and try to change it

const object = {
    name: "Bhargav",
    age: 21,
    status: "Egoistic"
}

object.status = "Selfish";
console.log(object);


// 4. try to add a new key value pair in const object

object.gender = "Male";
console.log(object);

// 5. Write a javascript Program to create a word meaning dictionary of 5 words

const dictionary = {
    aquantaince: "a slight knowledge of somebody/something",
    persistent: "lasting for long time or happening more often",
    grovel: "try to please somebody for something ",
    nonchalant: "not feeling or excited about something",
    manifest: "to show something or to be shown clearly"
}

console.log(dictionary.manifest);

