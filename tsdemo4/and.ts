{
    interface A {
        name: string;
        age: number
    }

    interface B {
        name: string;
        grade: number
    }

    const c: A & B = {
        name: 'c',
        age: 18,
        grade: 100
    }
}
