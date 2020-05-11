{
    // null undefined 是所有类型的子类型 即 null undefined 可以赋值给其他所有类型
    let a: null = null
    let b: undefined = undefined
    let bool: boolean = true
    let str: string = 'hi'
    let num: number = 1.223
    let obj: object = {}
    let n: any = 1

    // 接受参数是任意类型 并且函数没有返回值
    function print(x: any): void {console.log(x)}

    // 类型转换
    let x: number = 123
    let y: string = x.toString()

}
