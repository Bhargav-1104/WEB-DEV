// Write a program that prints all the even numbers in array

arr = [
  12, 3, 4, 3, 2, 4, 53, 3, 2, 4, 45, 343, 23, 23, 3, 53423, 24, 424, 242, 24,
];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
