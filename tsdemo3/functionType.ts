{
    function hi(name: string, age: number = 18): string | number {
        return age > 18 ? name : 404
    }

    function add(a: number, b: number): number {
        return a + b
    }

    // 两种写法完全相同 this 是call 的第一个参数
    add(1, 2)
    add.call(undefined, 1, 2)

    function printThis() {
        console.log(this)
    }
    // printThis()
    // 1.this === window
    // 2.this === global node中
    // 3.'use strict' 模式下 this === undefined

    let obj = {
        fn: function () {
            'use strict'
            console.log(this)
        }
    }

    obj.fn() // this === obj
    let obj2 = obj.fn
    obj2() // this === undefined

    // 箭头函数
    let fn = (a: number, b: number): number => {
        return a + b
    }

    interface Human {
        name: string,
        age: number
    }

    function fn1(this: Human) {
        console.log(this)
    }
    fn1.call({name: 'lzy', age: 18})
    function fn2(this: any) {
        console.log(this) // Human
        function fn3(this: any) {
            console.log(this) // window
        }
        fn3()
    }
    fn2.call({name: 'lzy'})

    // 函数重载
    function add2(n1: number, n2: number): number
    function add2(n1: string, n2: string): string
    function add2(n1, n2) {
        return n1 + n2
    }

    let xxx = add2('3', '2')
    let yyy = add2(1, 2)

    // 类型推断

    function add3(n1: string, n2: string) {
        return n1 + n2
    }
    let zzz = add3('aaa', 'bbb')
    zzz.split('')

    let yyyy = {name: 'lzy', age: 18, gender: 'man'}
    let xx: Human = yyyy

    //soundness sound unsound

    enum EventType { Mouse, Keyboard }

    interface Event {timestamp: number;}
    interface MouseEvent extends Event {x: number;y: number}
    interface KeyEvent extends Event {keyCode: number}
    function listenEvent(eventType: EventType, handler: (n: Event) => void) {}

// Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

// Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y))
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)))

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
    listenEvent(EventType.Mouse, (e: number) => console.log(e))
}

