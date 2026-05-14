let position = 1;

switch (position) {
    case 1: console.log('Print 1')
        break;
    case 2: console.log('Print 2')
        break;
    case 3: console.log('Print 3')
        break;
    case 4: console.log('Print 4')
        break;
    default: 
        console.log("Nothing is matched")
}

let day; 

switch (day) {
    case 1: 
        console.log('Monday')
        break;
    case 2: 
        console.log('Tuesday')
        break;
    case 3: 
        console.log('Wednesday')
        break;
    case 4: 
        console.log('Thursday')
        break;
    case 5: 
        console.log('Friday')
        break;
    case 6: 
        console.log('Saturday')
        break;
    case 7: 
        console.log('Sunday')
        break;
    default: 
        console.log('Invalid Day Number')
}

let name = "google"

switch(name) {
    case "tapaScript": 
        console.log("Teaching 40 days of javascript")
        break;
    case "Google": 
        console.log("Giving answer to all searches")
        break;
    default: 
        console.log("You are neither Google, nor tapaScript")
}

// Fall Through
const city = "Bangalore"
switch (city) {
    case "Bangalore":
    case "Kolhata":
    case "Agra":
    case "Jaibur": 
        console.log("All these are in India")
        break;
    case "New York":
    default:
        console.log("It is in USA")
}