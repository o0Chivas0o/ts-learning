{
    // null undefined 是所有类型的子类型 即 null undefined 可以赋值给其他所有类型
    var a = null;
    var b = undefined;
    var c = true;
    var d = 'hi';
    var e = 1.223;
    var obj = {};
    var n = 1;
    // 枚举 如果不给枚举对象的属性赋值,则会默认为0,1,2递增来代表各个属性
    var Gender = void 0;
    (function (Gender) {
        Gender["Man"] = "man";
        Gender["Woman"] = "woman";
    })(Gender || (Gender = {}));
    var gender = Gender.Man;
    var gender2 = Gender.Woman;
    // 接受参数是任意类型 并且函数没有返回值
    function print(x) {
        console.log(x);
    }
    // 类型转换
    var x = 123;
    var y = x.toString();
    var lzy = {
        name: 'lzy',
        age: 10,
        shape: {
            body: 'O',
            head: 'U'
        },
        hobbits: ['xxx', 'yyy'],
        say: function (word) {
            console.log(this.name + " : " + word);
        }
    };
    lzy.say('hi ');
    function createRect(config) {
    }
    var config = {
        width: 100,
        height: 100
    };
    var mySquare = createRect(config);
    var fn = (function () {
        var x = function (a, b) {
            return a + b;
        };
        x.inverseOperation = function (a, b) {
            return a - b;
        };
        return x;
    })();
    console.log(fn(1, 2));
}
