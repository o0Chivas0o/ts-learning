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
}
