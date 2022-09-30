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
const verbArr = ["walking", "flying", "swimming", "playing", "baking", "biking", "going to school", "driving", "sleeping", "painting"];

// Random verb generator
const randVerb = function() {
    const verbArrLength = verbArr.length;
    const verbIndex = Math.floor(Math.random() * verbArrLength);
    const verb = verbArr[verbIndex];
    return verb;
}



// Location array
const locationArr = [];


// Location generator




// Printout message
console.log(`You could draw... ${animal} ${verb} `); 