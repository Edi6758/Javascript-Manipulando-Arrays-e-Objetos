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

personList.sort((a, b) => {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }

})