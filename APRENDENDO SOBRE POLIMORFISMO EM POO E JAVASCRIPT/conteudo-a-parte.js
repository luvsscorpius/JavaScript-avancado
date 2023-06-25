class Animal {
    constructor(name) {
        this.nome = name
    }

    makeSound() {
        console.log("O animal faz um som.")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`O cachorro late, logo ${this.nome} late`)
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`O gato mia, logo ${this.nome} mia`)
    }
}
class Bird extends Animal {
    makeSound() {
        console.log(`O passáro canta, logo ${this.nome} canta`)
    }
}

// exemplo do uso do polimorfismo
const animals = [
    new Dog("Bob"),
    new Cat("Mimi"),
    new Bird("Sofia")
]

animals.forEach(animal => {
    animal.makeSound()
})