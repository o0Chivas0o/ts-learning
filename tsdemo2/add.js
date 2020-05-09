#!/usr/bin/env ts-node
{
    var a_1 = parseInt(process.argv[2]);
    var b_1 = parseInt(process.argv[3]);
    if (Number.isNaN(a_1) || Number.isNaN(b_1)) {
        console.log('参数必须为数字');
        process.exit(1);
    }
    console.log(a_1 + b_1);
    process.exit(0);
}
