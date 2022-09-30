// Message Generator Program

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
const animal = randAnimal();

// Verb array
const verbArr = ["walking", "flying", "swimming", "playing", "baking", 
    "biking", "going to school", "driving", "sleeping", "painting", "playing soccer", "climbing a tree"];

// Random verb generator
const randVerb = function() {
    const verbArrLength = verbArr.length;
    const verbIndex = Math.floor(Math.random() * verbArrLength);
    const verb = verbArr[verbIndex];
    return verb;
}
const verb = randVerb();

// Location array
const locationArr = ["under the bed", "at school", "at Grandma's house", "at camp", "on the playground", "in outer space", "on Mars", "in the kitchen", "in the bathtub"];

// Random location generator
const randLocation = function() {
    const randLocationLength = locationArr.length;
    const locationIndex = Math.floor(Math.random() * randLocationLength);
    const location = locationArr[locationIndex];
    return location;
}
const location = randLocation();


// Printout message
console.log(`You could draw ${animal}... ${verb}... ${location}!`); 