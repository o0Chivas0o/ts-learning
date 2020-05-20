{
    interface A {
        name: string;
        age: number
    }

    interface B {
        name: string;
        grade: number
    }

    const c: A | B = {
        name: 'c',
        age: 18,
        grade: 100
    }

    // function add(a: string | number, b: string | number) {
    //     return a + b
    // }
    // function add<T>(a: T, b: T) {
    //     return a + b
    // }

    function add(a: string, b: string): string
    function add(a: number, b: number): number
    function add(a: any, b: any) {
        return a + b
    }
    add(1, 2)
    add('1', '2')
}
