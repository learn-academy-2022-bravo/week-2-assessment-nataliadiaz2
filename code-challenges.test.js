// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multBy3", () => {
  it("takes in an array of numbers and returns an array with all the numbers multipled by 3", () => {
    expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

// ● multBy3 › takes in an array of numbers and returns an array with all the numbers multipled by 3
//
//   ReferenceError: multBy3 is not defined

// b) Create the function that makes the test pass.

//Create function -multBy3
//Parameter- array
//Utilize iteration through .map method
//Return array multiplied by 3
//Input two console.logs for each array variable above

const multBy3 = (array) => {
    return array.map(value => value * 3)
  }

console.log(multBy3(numbersArray1))
console.log(multBy3(numbersArray2))


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"
//Test
//
describe("divisbleBy3", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    expect(divisbleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisbleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisbleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

// ● divisbleBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not
//
//   ReferenceError: divBy3 is not defined

// b) Create the function that makes the test pass.

//Create function - divisbleBy3
//Parameter- number
//Conditional deciding if the number is divisible by 3
//Return a string to signify if the number is divisble by 3
//Return a string to signify if the number is not divisible by 3
//Make the function dynamic to take in any number to run through
//Code and input the variables above

const divisbleBy3 = (number) => {
  if (number % 3 == 0){
    return `${number} is divisible by three`
  }else {
    return `${number} is not divisible by three`
  }
}
console.log(divisbleBy3(num1))
console.log(divisbleBy3(num2))
console.log(divisbleBy3(num3))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("wordsCapitilized", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(wordsCapitilized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(wordsCapitilized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// ● wordsCapitilized › takes in an array of words and returns an array with all the words capitalized
//
//   ReferenceError: wordsCapitilized is not defined


// b) Create the function that makes the test pass.

//Create a function - wordsCapitilized
//Parameter- array
//Create a new variable within function to take in data
//Use an interation method .map to go through the array
//Return the element, use .charAt() mehtod to start at the 0 index of each string in the array
//Use the .toUpperCase() method to capitilize
//Use .substring() method starting at index 1, then adding .toLowerCase() method to convert all elements after the first element back to lower case
//Return strings back into an array

const wordsCapitilized = (array) => {
  let words = array.map(element => {
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
  })
  return words.splice("")
}
console.log(wordsCapitilized(randomNouns1))
console.log(wordsCapitilized(randomNouns2))

//Was having trouble getting the strings to have double quotes to match the expected output technically.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelIndex", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    expect(vowelIndex(vowelTester1)).toEqual(1)
    expect(vowelIndex(vowelTester2)).toEqual(0)
    expect(vowelIndex(vowelTester3)).toEqual(2)
  })
})

// ● vowelIndex › takes in a string and logs the index of the first vowel
//
//   ReferenceError: wordsCapitilized is not defined

// b) Create the function that makes the test pass.

//Create a new array with all vowels
//Create a function - vowelIndex
//Parameter- string
//Create new variable to store the new array data
//Create a for loop to run through the strings given
//Create a conditional to identify the vowels in the strings given
//Utilize the .push() method to push the new data in the variable created
//Return the vowels, use the .sort() method to have the index of the vowels in value order. Add an index[0] to only return the first index.
//Create code to take in all variables given above

const vowel = ["a", "e", "i", "o", "u"]

const vowelIndex = (string) => {
  let vowelLog = []
  for (let i = 0; i < string.length; i++) {
    if (vowel.indexOf(string[i]) > -1) {
      vowelLog.push(i);
      }
    }return vowelLog.sort()[0]
  }

console.log(vowelIndex(vowelTester1))
console.log(vowelIndex(vowelTester2))
console.log(vowelIndex(vowelTester3))

//
