{
    // 字面量类型
    interface Course {
        category: 'task' | 'live'
    }

    const course: Course = {
        category: 'task'
    }

    type Dir = 'east' | 'west' | 'north' | 'south'

    const dir: Dir = 'east'

    type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Tho' | 'Sum'

    const day: Weekdays = 'Mon'

}
