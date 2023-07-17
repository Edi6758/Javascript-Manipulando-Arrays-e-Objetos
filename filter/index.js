/**
 * the very intuitive filter is a repetition loop focused on 
 * filtering something in specific following a certain logic
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

//filtering people of the male gender
const result = personList.filter((person) => {
    return person.gender === "male"
})

console.log(result)