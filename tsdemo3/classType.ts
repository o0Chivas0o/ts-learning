{
    // 类 class
    // 接口是低配版的类
    // 类是高配版的接口

    abstract class Animal {
        birth: string
        protected kind: string
        move(): void {console.log('我在动')}
        abstract makeVoice(): void
        constructor(birth: string) {
            this.birth = birth
            if (this.birth === '胎生') {
                this.kind = '哺乳动物'
            } else {
                this.kind = '不是哺乳动物'
            }
        }
    }

    class Human extends Animal {
        static xxx: number = 1
        public name: string
        private _age: number
        get age() {
            return this._age
        }
        set age(value: number) {
            if (value < 0) {
                this._age = 0
            } else {
                this._age = value
            }
        }
        private secret: string
        constructor(name: string, age = 19) {
            super('胎生')
            this.name = name
            this.age = age
            this.secret = '这是我的秘密'
        }
        makeVoice() {
            console.log('说中文')
        }
    }

    let lzy: Human = new Human('lzy', 27)
    lzy.age = -1

    console.log(JSON.stringify(lzy));

    //     声明一个类 A
    //     声明一个类 B
    //     B 继承 A（B extends A）
    //     A 的对象属性有
    //     a1，类型为 number
    //     a2，是一个函数，函数的实现随意
    //     A 的构造函数会初始化 a1
    //     B 的对象属性有
    //     b1，类型为 string
    //     b2，是一个函数，函数的实现随意
    //     B 的构造函数会初始化 b1

    class A {
        a1: number
        a2(): void {
            console.log(1)
        }
        constructor(a1: number) {
            this.a1 = a1
        }
    }

    class B extends A {
        b1: string
        b2(): void {
            console.log(2)
        }
        constructor(b1: string, argv: number) {
            super(argv)
            this.b1 = b1
        }
    }

    let b = new B('xxx', 123)
    console.log(b);
}
