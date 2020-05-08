#!/usr/bin/env ts-node
{
    function createTabs(n: number): string {
        return '----'.repeat(n);
    }

    class Person {
        // children:Person[] 需要如下赋予初始值
        public children: Person[] = [];

        // name:string;
        // constructor(name){
        //     name = this.name
        // }
        // public 等同于 上述代码
        constructor(public name) {
        }

        addChild(child: Person): void {
            this.children.push(child);
        }


        // n?:number 非必要参数
        // void 意义为 返回值为0
        introduceFamily(n?: number): void {
            n = n || 0;
            console.log(`${createTabs(n)}${this.name}`);
            this.children.forEach(person => {
                person.introduceFamily(n + 1);
            });
        }
    }

    const grandpa = new Person('王麻子');
    const person1 = new Person('王大锤');
    const person2 = new Person('王者');
    const child11 = new Person('王毛');
    const child12 = new Person('王水');
    const child21 = new Person('王荣耀');
    const child22 = new Person('王农药');

    grandpa.addChild(person1);
    grandpa.addChild(person2);

    person1.addChild(child11);
    person1.addChild(child12);
    person2.addChild(child21);
    person2.addChild(child22);

    grandpa.introduceFamily();

}
