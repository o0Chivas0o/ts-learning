{ // 接口
    interface Shape {
        body: string
        head: string
    }

    interface Animal {
        move(): void
    }

    // 继承 Human 继承 Animal
    interface Human extends Animal {
        readonly name: string
        age: number
        shape: Shape
        hobbits?: Array<string>
        [propName: string]: any;
        say(word: string): void

    }

    let lzy: Human = {
        name: 'lzy',
        age: 10,
        shape: {body: 'O', head: 'U'},
        hobbits: ['xxx', 'yyy'],
        like: ['reading', 'zzz'],
        say(word: string) {console.log(`${this.name} : ${word}`);},
        move() {console.log('我动了')}
    }

    lzy.say('hi ')

    // 函数接口
    interface SecondOperation {
        (a: number, b: number): number
        inverseOperation(a: number, b: number): number
    }

    let fn: SecondOperation = (
        (): SecondOperation => {
            let x: any = function (a: number, b: number): number {return a + b}
            x.inverseOperation = function (a: number, b: number): number {return a - b}
            return x
        }
    )()

    // 声明一个接口 A
    // 属性 num，类型为 number
    // 属性 b，类型为布尔
    // 属性 str，类型为字符串
    // 属性 optional，类型为字符串，但是此属性是可选的
    // 属性 add，是一个函数，接收的参数有 n1 和 n2，n1 是一个数字，n2 也是一个数字，返回值是一个数字
    // 属性 r，类型为字符串，但是此属性是只读的
    interface A {
        num: number
        b: boolean
        str: string
        optional?: string
        readonly r: string
        (n1: number, n2: number): number
    }
}
