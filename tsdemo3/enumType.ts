{
    // 枚举 如果不给枚举对象的属性赋值,则会默认为0,1,2递增来代表各个属性
    enum Gender {
        Man = 'man',
        Woman = 'woman'
    }

    let gender: Gender = Gender.Man

    let gender2: Gender = Gender.Woman

    console.log(gender, gender2);
}
