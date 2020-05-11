{
    // null undefined 是所有类型的子类型 即 null undefined 可以赋值给其他所有类型
    let a: null = null
    let b: undefined = undefined
    let c: boolean = true
    let d: string = 'hi'
    let e: number = 1.223
    let obj: object = {}
    let n: any = 1

    // 枚举 如果不给枚举对象的属性赋值,则会默认为0,1,2递增来代表各个属性
    enum Gender {
        Man = 'man',
        Woman = 'woman'
    }

    let gender: Gender = Gender.Man

    let gender2: Gender = Gender.Woman

    // 接受参数是任意类型 并且函数没有返回值
    function print(x: any): void {console.log(x)}

    // 类型转换
    let x: number = 123
    let y: string = x.toString()

    // 接口
    interface Shape {
        body: string
        head: string
    }

    interface Human {
        readonly name: string
        age: number
        shape: Shape
        hobbits?: Array<string>
        say(word: string): void
    }

    let lzy: Human = {
        name: 'lzy',
        age: 10,
        shape: {body: 'O', head: 'U'},
        hobbits: ['xxx', 'yyy'],
        say(word: string) {console.log(`${this.name} : ${word}`);}
    }

    lzy.say('hi ')

    // 接口 创建长方形
    interface RectConfig {
        width?: number
        height?: number
        [propName: string]: number
    }

    function createRect(config: RectConfig): void {}

    let config = {
        width: 100,
        height: 100
    }

    let mySquare = createRect(config)

    interface SecondOperation {
        (a: number, b: number): number
        inverseOperation(a: number, b: number): number
    }

    let fn: SecondOperation = ((): SecondOperation => {
        let x: any = function (a: number, b: number): number {return a + b}
        x.inverseOperation = function (a: number, b: number): number {return a - b}
        return x
    })()

    interface Animal {
        move(): void
    }

    interface Human1 extends Animal {
        name: string
        age: number
    }

    let lzy1: Human1 = {
        age: 18,
        name: 'xxx',
        move() {
        }
    }

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
