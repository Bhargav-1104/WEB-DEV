// write a program that prints all the male people's first name given in a complex objects
const person = [
  {
    personName: "bhargav",
    gender: "male",
  },
  {
    personName: "abhi",
    gender: "female",
  },
  {
    personName: "abd",
    gender: "male",
  },
];

for (i = 0; i < person.length; i++) {
  if (person[i]["gender"] == "male") {
    console.log(person[i].personName);
  }
}
