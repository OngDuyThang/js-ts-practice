// Single Responsibility Principle: A class should have ONLY ONE reason to change
// Animal class will violate this principle if it has methods which ARE NOT responsibilities of an Animal
abstract class Animal {
    constructor() {}

    abstract walk(): void
    abstract eat(): void
    abstract sleep(): void

    // If we have these 3 methods, the class will have total 4 reasons to change, which violates the Single Responsibility Principle
    // saveToDatabase() {} // persistent concern
    // renderToScreen() {} // UI concern
    // logEvent() {} // logging concern
}

class Dog extends Animal {
    walk() { console.log("Dog is walking") }
    eat() { console.log("Dog is eating") }
    sleep() { console.log("Dog is sleeping") }
}

class Cat extends Animal {
    walk() { console.log("Cat is walking") }
    eat() { console.log("Cat is eating") }
    sleep() { console.log("Cat is sleeping") }
}

class Fish extends Animal {
    // Liskov Substitution Principle: A sub class should not have any weird behavior that could break the program correctness
    walk() {
        console.log("Fish can walk???")
        throw new Error("Fish can not walk")
    }
    eat() { console.log("Fish is eating") }
    sleep() { console.log("Fish is sleeping") }
}

interface Flyable {
    fly(): void
}

class Bird extends Animal implements Flyable {
    walk() { console.log("Bird is walking") }
    eat() { console.log("Bird is eating") }
    sleep() { console.log("Bird is sleeping") }

    // Interface Segregation Principle: Split interfaces into smaller interfaces
    // Dog, Cat, Fish does not have to fly, only Bird has to fly, so we create a new interface for Bird only
    fly() { console.log("Bird is flying") }
}

class Game {
    constructor(
        // Dependency Inversion Principle: Depend on abstractions, rather than implementations.
        private readonly animal: Animal
    ) {}

    doActions() {
        this.animal.walk()
        this.animal.eat()
        this.animal.sleep()
    }
}

// Open/Closed Principle: A class should be open for extension but closed for modification
// Instead of modifying Animal walk, eat, sleep methods (such as if/else, switch/case), we create Dog and Cat subclasses
// In each subclass, walk, eat, sleep methods will have their own implementation
new Game(new Dog()).doActions()
new Game(new Cat()).doActions()