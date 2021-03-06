
// Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// Object Destructuring 2
let planetFacts = {
	numPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
  

// Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
	return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // "Your name is Alejandro and you like purple"
  getUserData({firstName: "Melissa"}) // "Your name is Melissa and you like green"
  getUserData({}) // "Your name is undefined and you like green"


// Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi




// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]



// raceResults()
const runnerResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
function raceResults([ first, second, third ]) {
	return {
		first,
		second,
		third
	};
}



