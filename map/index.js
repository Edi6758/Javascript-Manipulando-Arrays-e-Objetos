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

const convertObject = (person) => {
    return {
        ...person,
        codeName: `code-${person.name}`,
        ageMultiplied: person.age * 2
    }
}

console.log(personList.map(convertObject))