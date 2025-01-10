const a = 0.1;
const b = 0.2;

console.log(a+b); // 0.30000000000000004
console.log(typeof (a+b).toFixed(1)); //String
console.log(Number((a+b).toFixed(1))); // Number
console.log(typeof Number((a+b).toFixed(1))); // Number