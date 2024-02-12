let even_number = [];
let odd_number = [];
let multiple_of_3 = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 2 === 1) multiple_of_3.push(i);
  else if (i % 2 === 1) odd_number.push(i);
  else even_number.push(i);
}
console.log(`
fizz = ${odd_number}
buzz = ${even_number}
fizzbuzz = ${multiple_of_3}
`);

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 2 === 1) {
//     console.log(i + ": fizzbuzz");
//   } else if (i % 2 === 1) {
//     console.log(i + ": fizz");
//   } else {
//     console.log(i + ":  buzz");
//   }
// }
