var massMark = 78
var heightMark = 1.69

var massJohn = 92
var heightJohn = 1.95

console.log("DATA 1");
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
BMIMark1 = massMark / heightMark ** 2
console.log("Mark's BMI")
console.log(BMIMark1)

BMIJohn = massJohn / heightJohn ** 2
console.log("Join's BMI")
console.log(BMIJohn)


// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
markHigherBMI = BMIMark > BMIJohn
console.log("Mark has a higher BMI than Join")
console.log(markHigherBMI)

// ----------------------