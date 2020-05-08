{
    class Calculator {
        public container: HTMLDivElement
        private output: HTMLDivElement
        private span: HTMLSpanElement
        public n1: string = null
        public n2: string = null
        public operator: string = null
        public result: string = null
        public keys: Array<Array<string>> = [
            ["Clear", "÷"],
            ["7", "8", "9", "×"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "="]
        ]

        constructor() {
            this.createContainer()
            this.createOutput()
            this.createButtons()
            this.bindEvents()
        }

        createButton(text: string, container: HTMLElement, className: string) {
            let button: HTMLButtonElement = document.createElement('button')
            if (className) {
                button.className = className
            }
            button.textContent = text
            container.appendChild(button)
            return button
        }

        createContainer() {
            let container: HTMLDivElement = document.createElement('div')
            container.classList.add('calculator')
            document.body.appendChild(container)
            this.container = container
        }

        createOutput() {
            let output: HTMLDivElement = document.createElement('div')
            output.classList.add('output')
            this.output = output
            let span: HTMLSpanElement = document.createElement('span')
            span.textContent = '0'
            this.output.appendChild(span)
            this.container.appendChild(output)
            this.span = span
        }

        createButtons() {
            this.keys.forEach((textList: Array<string>) => {
                let div: HTMLDivElement = document.createElement('div')
                div.classList.add('row')
                textList.forEach((text: string) => {
                    this.createButton(text, div, `button text-${text}`)
                })
                this.container.appendChild(div)
            })
        }

        bindEvents() {
            this.container.addEventListener('click', (e) => {
                if (e.target instanceof HTMLButtonElement) {
                    let button = e.target
                    let text = button.textContent
                    this.updateNumbersOrOperator(text)
                }
            })
        }

        updateNumber(name: string, text: string): void {
            if (this[name]) {
                this[name] += text
            } else {
                this[name] = text
            }
            this.span.textContent = this[name].toString()
        }

        updateNumbers(text: string): void {
            if (this.operator) {
                this.updateNumber('n2', text)
            } else {
                this.updateNumber('n1', text)
            }
        }

        updateResult(): void {
            let result
            let n1: number = parseFloat(this.n1)
            let n2: number = parseFloat(this.n2)
            if (this.operator === '+') {
                result = (n1 + n2);
            } else if (this.operator === '-') {
                result = (n1 - n2);
            } else if (this.operator === '×') {
                result = (n1 * n2);
            } else if (this.operator === '÷') {
                result = (n1 / n2);
            }
            result = result.toPrecision(6)
                .replace(/0+$/g, '')
                .replace(/0+e/g, 'e')
            if (n2 === 0) {
                result = '不是数字'
            }
            this.span.textContent = result
            this.n1 = null
            this.n2 = null
            this.operator = null
            this.result = result
        }

        updateOperator(text: string): void {
            if (this.n1 === null) {
                this.n1 = this.result
            }
            this.operator = text
        }

        updateNumbersOrOperator(text: string) {
            if ('0123456789.'.indexOf(text) >= 0) {
                this.updateNumbers(text)
            } else if ('+-×÷'.indexOf(text) >= 0) {
                this.updateOperator(text)
            } else if ('='.indexOf(text) >= 0) {
                this.updateResult()
            } else if (text === 'Clear') {
                this.n1 = null
                this.n2 = null
                this.operator = null
                this.result = null
                this.span.textContent = '0'
            }
        }
    }

    new Calculator()
}
