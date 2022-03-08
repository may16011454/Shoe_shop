//demo of different object and methods
console.log('Example of objects');

//defined object
//const means it wont change
//let means it can change
//var is another way of saying let
const car = {
    make:"Ford",
    model:"Focus",
    engine:"1.8",
    fuel:"Unleaded",
    colour:"Hot Pink",
    price: 9.99
}
//print car 
console.log(car)
//print car detail
console.log(car.price)

//array of objects
const cars = [
    {
        make:"Ford",
        model:"Focus",
        engine:"1.8",
        fuel:"Unleaded",
        colour:"Hot Pink",
        price: 9.99
    },
    {
        make:"Honda",
        model:"Jazz",
        engine:"2.2",
        fuel:"Kerosene",
        colour:"EggshellWhite",
        price: 5.49
    },
    {
        make:"Toyota",
        model:"Aygo",
        engine:"0.8",
        fuel:"Unleaded",
        colour:"Silver",
        price: 499.99
    }
]
//priont single property
console.log(cars[1].model)

//search for specific element
function SearchObject(search){
    const result = cars.find(car => car.make === search);
    console.log(result)
    return result
}

function VagueSearch(search){
    const result = cars.filter(items => items.contains(search));
    console.log(result)
    return result
}