//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


let favFoods = a_person => {
    for(let i = 0; i < Object.values(a_person).length; i++){
        if(Array.isArray(Object.values(a_person)[i])){
            for(let x = 0; x < Object.values(a_person)[i].length; x++){
                console.log(Object.values(a_person)[i][x])
            }
        }else if(typeof Object.values(a_person)[i]=='string'){
            console.log(Object.values(a_person)[i])
        }else{
            for(const [key, value] of Object.entries(a_person)[i]){
                console.log(`${value}`)
            }
        }
        }
    };
console.log(favFoods(person3))




//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}`)
        return 'End of person info.'
    }
    // Create another arrow function for the addAge method that takes a single parameter
    addAge = (birthdays) => {
        this.age += birthdays;
        console.log(`${this.name} just had ${birthdays} birthdays.  They are now ${this.age} years old!`)
    }
};

let kingsley = new Person('Kingsley',56);
let vivian = new Person('Vivian',72);

kingsley.printInfo()
vivian.printInfo()

// Adding to the age 

kingsley.addAge(3)

vivian.addAge(3)




// =============Exercise #3 ============//
/*

    Create a Promise based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let wordCateg = (a_string) => {
    return new Promise( (resolve, reject) => {
        if(a_string.length>10){
            resolve("Big Word")
        }else{
            reject("Small Word")
        }
    })
}


wordCateg("data")
wordCateg("instructional")