/**
 * find treats the first object it finds in the list
 */

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

//the first person of the male sex he returns here
const result = personList.find((person) => {
    return person.gender === "male"
})

console.log(result)