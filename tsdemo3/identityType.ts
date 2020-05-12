{
    // 泛型
    // <T> 就是一个占位符

    // 泛型约束
    interface hasLength {
        length: number
    }

    function returnIt<T extends hasLength>(sth: T): T {
        return sth
    }

    let returnIt2: <T extends hasLength>(sth: T) => T = returnIt

    let s: string = returnIt('hi')

    function returnArray<T>(array: T[]): T[] {
        return array
    }

    interface Student {
        name: string
        age: number
    }

    let a = returnArray<Student>([{name: 'xxx', age: 11}, {name: 'yyy', age: 22}])

    interface Add {
        (a: number, b: number): number
    }

    interface AnyAdd<T> {
        (a: T, b: T): T
    }

    let numberAdd: Add = (a: number, b: number): number => {
        return a + b
    }

    let stringAdd: AnyAdd<string> = (a: string, b: string): string => {
        return a + b
    }

    class Animal {
        move(): void {
            console.log('动了')
        }
    }

    class Human extends Animal {
        age: number
        name: string
        constructor() {
            super()
        }
    }

    function create<T extends Animal>(c: { new(): T }) {
        return new c()
    }

    let string = create<Human>(Human)
    console.log(string);
}
