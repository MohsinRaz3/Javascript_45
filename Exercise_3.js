let naam = "Walter White";
// Converting to Lower and Upper Case Output
let chota = naam.toLowerCase();
let bara = naam.toUpperCase();

//Lower and Upper Case Output
  console.log(`${chota} ${bara}`);


//Title Case
function sahiCase(str){
    return str
    .toLowerCase()
    .split(" ")
    .map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); 
  }
//Title Case Output
console.log(sahiCase("I'm the one"));
