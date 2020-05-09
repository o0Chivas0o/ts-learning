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
    function print(x: any): void {
        console.log(x)
    }

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
        shape: {
            body: 'O',
            head: 'U'
        },
        hobbits: ['xxx', 'yyy'],
        say(word: string) {
            console.log(`${this.name} : ${word}`);
        }
    }

    lzy.say('hi ')

    // 接口 创建长方形
    interface RectConfig {
        width?: number
        height?: number

        [propName: string]: number
    }

    function createRect(config: RectConfig): void {

    }

    let config = {
        width: 100,
        height: 100
    }

    let mySquare = createRect(config)

    interface 二则运算 {
        (a: number, b: number): number

        逆运算(a: number, b: number): number
    }

    let add: 二则运算 = (
        (): 二则运算 => {
            let x: any = function (c: number, d: number): number {
                return c + d
            }

            x.逆运算 = function (c: number, d: number): number {
                return c - d
            }
        }
    )()

}
