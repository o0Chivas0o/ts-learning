{

    // Readonly
    interface Person {
        name: string
        age: number
    }

    const p: Person = {
        name: 'lzy', age: 18
    }

    interface ReadonlyPerson {
        readonly name: string
        readonly age: number
    }

    type ReadonlyPerson2 = Readonly<Person>

    const person: Readonly<Person> = {
        name: 'lzy', age: 18
    }

    // partial
    interface Person {
        name: string
        age: number
        grade: number
    }

    interface Person2 {
        name?: string
        age?: number
        grade?: number
    }

    type Person3 = Partial<Person>
    type Person4 = Required<Person>
}
