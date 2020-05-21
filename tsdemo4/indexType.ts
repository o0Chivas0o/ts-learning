{
    const calender = (options: calenderOptions) => {

    }

    interface calenderOptions {
        [K: string]: any
    }

    calender({
        time: Date.now,
        view: 'year'
    })

    function pluck<T, K extends keyof T>(object: T, keys: Array<K>): T[K][] {
        // T - {name: string , age: number , grade: number}
        // keyof T - 'name' | 'age' | 'grade'
        // K extends keyof T - 'name' | 'age' | 'grade'
        // Array<T[K]> -> T[K][]
        return keys.map(key => object[key])
    }

    interface Person {
        name: string,
        age: number,
        grade: number
    }

    type X = keyof Person

    pluck({name: 'xxx', age: 18, grade: 100}, ['name', 'age'])
    // [ 'xxx' , 18 ]      Array<T[K]> -> T[K][]
}
