class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    sound() { }

    hello() {
        console.log(`Hello, I am ${this.name}
I am ${this.age} years old`);
            this.sound();
    }
}

class Cow extends Animal {
    constructor(name, age) {
        super(name, age);
        this.name = `${name}`;
        this.age = `${age}`;
    }
    sound() {
        console.log('mooo');
    }
}

class Sheep extends Animal {
    sound() {
        console.log('woof');
    }
}

class Cat extends Animal {
    sound() {
        console.log('meow');
    }
}


const c1 = new Cow('Cow', 12);
const s1 = new Sheep('Sheep', 6);

const ct2 = new Cat('Cat', 3);

const animals = [c1, s1, ct2];
animals.forEach(a => a.hello());