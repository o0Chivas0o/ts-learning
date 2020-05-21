{
    type Props = {
        action: 'create'
        name: string
    } | {
        action: 'update'
        name: string
        id: number
    }

    const p1: Props = {
        action: 'update'
    }

    const p2: Props = {
        action: 'create'
    }

    const p3: Props = {
        action: 'create',
        name: 'ts入门'
    }

    const p4: Props = {
        action: 'update',
        name: 'ts入门'
    }

    const p5: Props = {
        action: 'update',
        name: 'ts入门',
        id: 1
    }

    //wrong: p1 p2 p4 , right: p3 p5

    // 可识别联合类型
    function fn(a: Props) {
        if (a.action === 'create') {
            console.log(a.name);
        } else {
            console.log(a.id);
        }
    }
}
