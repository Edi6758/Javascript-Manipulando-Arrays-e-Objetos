const personList = [
    {
        name: "Joao",
        age: 20,
        gender: "male"

    },
    {
        name: "Maria",
        age: 25,
        gender: "female"
    },
    {
        name: "Pedro",
        age: 30,
        gender: "male"
    },
    {
        name: "Ana",
        age: 35,
        gender: "female"
    },
    {
        name: "Jose",
        age: 40,
        gender: "male"
    },
    {
        name: "Joana",
        age: 45,
        gender: "female"
    },
    {
        name: "Lucas",
        age: 50,
        gender: "male"
    },
    {
        name: "Ana",
        age: 55,
        gender: "female"
    }
]

let sum = 0

//old form use for...
// for(let i = 0; i < personList.length; i++){
//     console.log(personList[i])
// }
// console.log(personList)

//new form use for...
// personList.forEach((person) => {console.log(person)})

//sum age of all people
const sumAge = (person) => {
    sum += person.age
}

personList.forEach(sumAge)

console.log(sum)