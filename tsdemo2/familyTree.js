#!/usr/bin/env ts-node
{
    function createTabs(n) {
        return '----'.repeat(n);
    }
    var Person = /** @class */ (function () {
        // name:string;
        // constructor(name){
        //     name = this.name
        // }
        // public 等同于 上述代码
        function Person(name) {
            this.name = name;
            // children:Person[] 需要如下赋予初始值
            this.children = [];
        }
        Person.prototype.addChild = function (child) {
            this.children.push(child);
        };
        // n?:number 非必要参数
        // void 意义为 返回值为0
        Person.prototype.introduceFamily = function (n) {
            n = n || 0;
            console.log("" + createTabs(n) + this.name);
            this.children.forEach(function (person) {
                person.introduceFamily(n + 1);
            });
        };
        return Person;
    }());
    var grandpa = new Person('王麻子');
    var person1 = new Person('王大锤');
    var person2 = new Person('王者');
    var child11 = new Person('王毛');
    var child12 = new Person('王水');
    var child21 = new Person('王荣耀');
    var child22 = new Person('王农药');
    grandpa.addChild(person1);
    grandpa.addChild(person2);
    person1.addChild(child11);
    person1.addChild(child12);
    person2.addChild(child21);
    person2.addChild(child22);
    grandpa.introduceFamily();
}
