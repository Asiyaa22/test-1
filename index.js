// SECTION 1

// 1) Profile Builder
let fullName = "Shreya Sharma";
let age = 19;
let semester = 3;
let hasLaptop = true;
let attendance = 87.5;

console.log(
  `${fullName} is ${age} years old and currently in semester ${semester}. Laptop: ${hasLaptop}. Attendance: ${attendance}%`
);

// 2) Fix the Errors
let city = "Delhi";
let graduationYear = "2027";
let isHosteller = true;
let cgpa = 8.5;
let student = {
  course: "BSc",
  collegeName: "Govt College"
};

console.log(typeof city);
console.log(typeof graduationYear);
console.log(typeof isHosteller);
console.log(typeof cgpa);
console.log(typeof student);

// 3) Swap Values
let firstName = "Arjun";
let lastName = "Reddy";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log(firstName);
console.log(lastName);

// 4) Valid or Invalid
let name123 = "Ravi";
let $amount = 2000;
let variableName = "keyword";
let isEligible = true;
let homeTown = "Chennai";

console.log(name123, $amount, variableName, isEligible, homeTown);

// SECTION 2

// 1) Predict Output
console.log("2053");
console.log("462");
console.log("162");
console.log("76");

// 2) Implicit vs Explicit Conversion

// Implicit
console.log("10" + 5);
console.log("10" * 5);

// Explicit
console.log(String(10) + String(5));
console.log(Number("10") * Number("5"));

// 3) Mix Data Types
let a = "5";
let b = 2;
let c = true;

console.log(a + b + c);
console.log(Number(a) + b + c);
console.log(a + c);
console.log(a * (b + c));