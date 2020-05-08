{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            this.keys = [
                ["Clear", "÷"],
                ["7", "8", "9", "×"],
                ["4", "5", "6", "-"],
                ["1", "2", "3", "+"],
                ["0", ".", "="]
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            if (className) {
                button.className = className;
            }
            button.textContent = text;
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('calculator');
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            output.classList.add('output');
            this.output = output;
            var span = document.createElement('span');
            span.textContent = '0';
            this.output.appendChild(span);
            this.container.appendChild(output);
            this.span = span;
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.forEach(function (textList) {
                var div = document.createElement('div');
                div.classList.add('row');
                textList.forEach(function (text) {
                    _this.createButton(text, div, "button text-" + text);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    var text = button.textContent;
                    _this.updateNumbersOrOperator(text);
                }
            });
        };
        Calculator.prototype.updateNumber = function (name, text) {
            if (this[name]) {
                this[name] += text;
            }
            else {
                this[name] = text;
            }
            this.span.textContent = this[name].toString();
        };
        Calculator.prototype.updateNumbers = function (text) {
            if (this.operator) {
                this.updateNumber('n2', text);
            }
            else {
                this.updateNumber('n1', text);
            }
        };
        Calculator.prototype.updateResult = function () {
            var result;
            var n1 = parseFloat(this.n1);
            var n2 = parseFloat(this.n2);
            if (this.operator === '+') {
                result = (n1 + n2);
            }
            else if (this.operator === '-') {
                result = (n1 - n2);
            }
            else if (this.operator === '×') {
                result = (n1 * n2);
            }
            else if (this.operator === '÷') {
                result = (n1 / n2);
            }
            result = result.toPrecision(6)
                .replace(/0+$/g, '')
                .replace(/0+e/g, 'e');
            if (n2 === 0) {
                result = '不是数字';
            }
            this.span.textContent = result;
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
        };
        Calculator.prototype.updateOperator = function (text) {
            if (this.n1 === null) {
                this.n1 = this.result;
            }
            this.operator = text;
        };
        Calculator.prototype.updateNumbersOrOperator = function (text) {
            if ('0123456789.'.indexOf(text) >= 0) {
                this.updateNumbers(text);
            }
            else if ('+-×÷'.indexOf(text) >= 0) {
                this.updateOperator(text);
            }
            else if ('='.indexOf(text) >= 0) {
                this.updateResult();
            }
            else if (text === 'Clear') {
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }
        };
        return Calculator;
    }());
    new Calculator();
}
