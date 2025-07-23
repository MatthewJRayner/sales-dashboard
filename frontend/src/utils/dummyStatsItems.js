export const dummyStatsItems = {
Both: {
    weekly_sales: {
    sales: Number((Math.random() * (2000 - 500) + 500).toFixed(2)),
    percentage: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    monthly_sales: {
    sales: Number((Math.random() * (10000 - 2000) + 2000).toFixed(2)),
    percentage: Number((Math.random() * 40 - 15).toFixed(2)),
    },
    total_sales_last_week: {
    count: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    arrow_boolean: Math.floor(Math.random() * 2),
    sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)),
    graph: (() => {
        const total = Number((Math.random() * (1500 - 300) + 300).toFixed(2));
        const dailyAvg = total / 7;
        const initialValues = Array.from({ length: 7 }, (_) => 
        Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
        );
        const sum = initialValues.reduce((a, b) => a + b, 0);
        return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
    })(),
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    daily_average: {
    count: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
    percentage: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(2)),
        previous_month: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    },
    period_graphs: {
    last_week: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 500;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        },
    },
    last_month: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 2000;
            const dailyAvg = total / 30;
            const initialValues = Array.from({ length: 30 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        },
    },
    last_3_months: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 6000;
            const dailyAvg = total / 90;
            const initialValues = Array.from({ length: 90 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`),
        },
    },
    },
    daily_items_stats: {
    daily_sales: {
        sales: Number((Math.random() * (500 - 100) + 100).toFixed(2)), // 100 to 500
        percentage: Number((Math.random() * 20 - 5).toFixed(2)), // -5% to 15%
    },
    recent_time: '15:00',
    },
},
Cafe: {
    weekly_sales: {
    sales: Number((Math.random() * (2000 - 500) + 500).toFixed(2)),
    percentage: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    monthly_sales: {
    sales: Number((Math.random() * (10000 - 2000) + 2000).toFixed(2)),
    percentage: Number((Math.random() * 40 - 15).toFixed(2)),
    },
    total_sales_last_week: {
    count: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    arrow_boolean: Math.floor(Math.random() * 2),
    sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)),
    graph: (() => {
        const total = Number((Math.random() * (1500 - 300) + 300).toFixed(2));
        const dailyAvg = total / 7;
        const initialValues = Array.from({ length: 7 }, (_) => 
        Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
        );
        const sum = initialValues.reduce((a, b) => a + b, 0);
        return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
    })(),
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    daily_average: {
    count: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
    percentage: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(2)),
        previous_month: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    },
    period_graphs: {
    last_week: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 500;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        },
    },
    last_month: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 2000;
            const dailyAvg = total / 30;
            const initialValues = Array.from({ length: 30 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        },
    },
    last_3_months: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 6000;
            const dailyAvg = total / 90;
            const initialValues = Array.from({ length: 90 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`),
        },
    },
    },
    daily_items_stats: {
    daily_sales: {
        sales: Number((Math.random() * (500 - 100) + 100).toFixed(2)), // 100 to 500
        percentage: Number((Math.random() * 20 - 5).toFixed(2)), // -5% to 15%
    },
    recent_time: '15:00',
    },
},
Bakery: {
    weekly_sales: {
    sales: Number((Math.random() * (2000 - 500) + 500).toFixed(2)),
    percentage: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    monthly_sales: {
    sales: Number((Math.random() * (10000 - 2000) + 2000).toFixed(2)),
    percentage: Number((Math.random() * 40 - 15).toFixed(2)),
    },
    total_sales_last_week: {
    count: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    arrow_boolean: Math.floor(Math.random() * 2),
    sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)),
    graph: (() => {
        const total = Number((Math.random() * (1500 - 300) + 300).toFixed(2));
        const dailyAvg = total / 7;
        const initialValues = Array.from({ length: 7 }, (_) => 
        Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
        );
        const sum = initialValues.reduce((a, b) => a + b, 0);
        return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
    })(),
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    daily_average: {
    count: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
    percentage: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(2)),
        previous_month: Number((Math.random() * 30 - 10).toFixed(2)),
    },
    },
    period_graphs: {
    last_week: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 500;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        },
    },
    last_month: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 2000;
            const dailyAvg = total / 30;
            const initialValues = Array.from({ length: 30 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        },
    },
    last_3_months: {
        weekday_average: {
        graph: (() => {
            const total = 100;
            const dailyAvg = total / 7;
            const initialValues = Array.from({ length: 7 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        time_of_day_average: {
        graph: (() => {
            const total = 200;
            const slotAvg = total / 16;
            const initialValues = Array.from({ length: 16 }, (_) => 
            Number((Math.random() * (slotAvg * 2 - slotAvg * 0.5) + slotAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: ['8:00-8:30', '8:30-9:00', '9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00'],
        },
        daily: {
        graph: (() => {
            const total = 6000;
            const dailyAvg = total / 90;
            const initialValues = Array.from({ length: 90 }, (_) => 
            Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2))
            );
            const sum = initialValues.reduce((a, b) => a + b, 0);
            return initialValues.map(value => Number((value * (total / sum)).toFixed(2)));
        })(),
        labels: Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`),
        },
    },
    },
    daily_items_stats: {
    daily_sales: {
        sales: Number((Math.random() * (500 - 100) + 100).toFixed(2)), // 100 to 500
        percentage: Number((Math.random() * 20 - 5).toFixed(2)), // -5% to 15%
    },
    recent_time: '15:00',
    },
},
};