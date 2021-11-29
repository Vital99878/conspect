type BasePerson = {
    id: string
    name: 'Bad'
    getName(age: string): BasePerson['name']
}


class Person implements BasePerson{
    id: string;
    name: 'Bad'
    constructor(id: string) {
        this.id = id
        this.name = 'Bad'
    }
    getName() {
        return this.name
    }
}




const person = new Person('id');
const name = person.getName()
console.log(name)
console.log(name)

// & - intersection

export interface Eat {
    eat(): boolean,
    name: string
}

const o: Eat = {
    eat(): boolean {
        return true
    },
    drink(): boolean {
        return false
    },
    name: 'super'
};

export interface Eat {
    drink(): boolean
}

