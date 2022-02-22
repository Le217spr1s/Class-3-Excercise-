//Create a function that takes an object and returns the keys 
//and values as separate arrays. Return the keys 
//sorted alphabetically and their corresponding values in the same order.
const car = { a:mustang, c:f-150, b:lexus, d:jeep}
const keys = Object.keys (car)
const values = Object.values (car)
function sortobject () {
    keys.sort();
    console.log (keys);
    console.log (values);}

    