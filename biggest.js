//write a program to print the biggest number in an array

arr = [
  13, 23, 3434, 32424, 4135645, 67, 88, 5, 68, 9764, 3435436, 45, 77, 656, 4,
  535, 7455, 235,
];

max = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
