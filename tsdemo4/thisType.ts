{
    class Calc {
        public value: number
        constructor(n: number) {
            this.value = n
        }
        add(n: number) {
            this.value += n
            return this
        }
        multiple(n: number) {
            this.value *= n
            return this
        }
    }

    class BiggerCalc extends Calc {
        sin() {
            this.value = Math.sin(this.value)
            return this
        }
    }

    const c = new BiggerCalc(1)
    c.add(2).multiple(7).sin().add(1)
}
