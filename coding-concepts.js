// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: "B" "r" "a" "v" "o"  "2" "0" "2" "2"
// b) Verify and explain: The answer is an array of the elements broken up. The split method takes the variable contents and splits each index into an individual element. The output comes back as an array to contain all new elements.
//Output:
// [
//   'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]


// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: `Hello, LEARN Student`
// b) Verify and explain: The answer came back as undefined because the function is missing a return before the string. Without the return the parameter isn't acted on to give an output.
//Output:
// undefined

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: The answer will be undefined
// b) Verify and explain: The variable can have the Higher Order Function in the variable declaration. Then in the console.log the variable is acted on, running through the .map method included in its description.

//Output: [ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The variable declared in its definition the .filter method to run through the given array. Within the .filter method is an argument that iterates through the array only recognizing the odd numbers. The console.log goes through the variable and the code to output the odd numbers, or not divisible by 2.
//Output: [ 11, 13, 15 ]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The object above is called myCodingSkills. Within the object are mulitple keys with values. The values within the keys are arrays containing strings. In the code the object is being called. Within the call the key 'languages' is being called in. The key 'languages' is an array. When the code includes an index after the key, the value of the position is being called. The value of the index 0 in this case is the first string in the array. There is only one index being called in the code after the object and key are identified.

//Output: JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:[student: "George", cohort: "Bravo", year: 2022]
// b) Verify and explain: The new variable is calling the class 'Learn'. Inside the constructor the parameter 'name' is made to be dynamic and can change when addressed. The variable identifies the class with 'new', and gives the parameter 'name' a new value "George". The console.log is logging the variable taking in the new parameter and static keys in the class, and outputting all new and static data.


//Output: { student: 'George', cohort: 'Bravo', year: 2022 }
