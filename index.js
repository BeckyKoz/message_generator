// What Should I Draw? A random message generator project for Codecademy

// Animal array
// const animalArr = ["a deer", "a bear", "a cat", "a dog", 
//     "an elephant", "a fish", "a giraffe", "a lion", "a monkey", 
//     "a shark", "a rabbit", "a snake", "a camel", "an owl", 
//     "a penguin", "an octopus", "a pig"];

// // Random animal generator
// const randAnimal = function() {
//     const animalArrLength = animalArr.length;
//     const animalIndex = Math.floor(Math.random() * animalArrLength);
//     const animal = animalArr[animalIndex];
//     return animal;
// }

// Verb array
const verbArr = ["walking", "flying", "swimming", "baking", 
    "biking", "singing", "driving", "sleeping", "painting", 
    "playing soccer", "climbing a tree"];

// Random verb generator
const randVerb = function() {
    const verbArrLength = verbArr.length;
    const verbIndex = Math.floor(Math.random() * verbArrLength);
    const verb = verbArr[verbIndex];
    return verb;
}

// Location array
const locationArr = ["under the bed", "at school", "at Grandma's house", 
"at camp", "on the playground", "in outer space", "on Mars", 
"in the kitchen", "in the bathtub", "in the woods"];

// Random location generator
const randLocation = function() {
    const randLocationLength = locationArr.length;
    const locationIndex = Math.floor(Math.random() * randLocationLength);
    const location = locationArr[locationIndex];
    return location;
}

////////////////////
// Create display on web page

const disp = document.querySelector("#readout");
const btn = document.querySelector("#idea");

// Animal array
const animalArr = ["a deer", "a bear", "a cat", "a dog", 
    "an elephant", "a fish", "a giraffe", "a lion", "a monkey", 
    "a shark", "a rabbit", "a snake", "a camel", "an owl", 
    "a penguin", "an octopus", "a pig"];

// Random animal generator
const randAnimal = function() {
    const animalArrLength = animalArr.length;
    const animalIndex = Math.floor(Math.random() * animalArrLength);
    const animal = animalArr[animalIndex];
    return animal;
}

// Assemble message
function displayMessage() {
    const animal = randAnimal();
    const verb = randVerb();
    const location = randLocation();
    const message = `You could draw ${animal}... ${verb}... ${location}!`;
        //disp.innerHTML = `You could draw ${animal}... ${verb}... ${location}!`;
    disp.innerHTML = message;
}

// Display button handler
btn.addEventListener('click', displayMessage);
    //btn.onclick = displayMessage;

//////////////////////////////////////

// Reset button
const resetBtn = document.body.querySelector('#reset');

const reset = function() {
   disp.innerHTML = "";
   
    // disp.innerHTML = '';
}

resetBtn.addEventListener('click', reset);

//////////////////////////////////////////////////////
// Challenge: generalize the random index generator

// const randomIndex = function(arr) {
//     return arr[Math.floor(Math.random()*arr.length)];
// }

// const animal2 = randomIndex(animalArr);
// const verb2 = randomIndex(verbArr);
// const location2 = randomIndex(locationArr);
