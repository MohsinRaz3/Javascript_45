// Best places to visit
let places = ["Malaysia ","Portugal ","Alberqurqe ","Sydney ","California "]

console.log(`${places}`)

//Aphabatic order
let sortedArray = places.sort()
console.log(`${sortedArray}`)

//Reverse order
let reversedArray = places.reverse()
console.log(`${reversedArray}`)

// Again reversed and sorted to orignal array

let sorted_again = reversedArray.sort()
let rev_again = sorted_again.sort()

console.log(`${rev_again}`)