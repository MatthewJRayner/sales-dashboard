export const dummyStatsHome = {
  Both: {
    year_sales_graph: {
      total_sales_year: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000, // 10,000 to 50,000
      monthly_average: Number(((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12).toFixed(2)), // Derived from total_sales_year
      graph: Array.from({ length: 12 }, () => {
        const monthlyAvg = ((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12);
        return Number((Math.random() * (monthlyAvg * 2 - monthlyAvg * 0.5) + monthlyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (50000 / sum)).toFixed(2)); // Normalize to a reasonable total (e.g., 50,000)
      }),
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    average_growth_graph: {
      average_growth: Number((Math.random() * 10).toFixed(2)), // 0% to 10%
      percentages: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(0)), // -5% to 15%
        previous_year: Number((Math.random() * 30 - 10).toFixed(0)), // -10% to 20%
      },
      graph: Array.from({ length: 7 }, () => Number((Math.random() * 15).toFixed(2))), // 0% to 15%
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      previous_3_weeks: {
        week0: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
        week1: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
      },
    },
    monthly_sales_graph: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      percentages: {
        previous_month: Number((Math.random() * 30 - 10).toFixed(0)), // -10% to 00%
        previous_year: Number((Math.random() * 40 - 15).toFixed(0)), // -15% to 05%
      },
      graph: Array.from({ length: 30 }, (_, i, arr) => {
        const total = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Recalculate for each run
        const dailyAvg = total / 30;
        return Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (5000 / sum)).toFixed(2)); // Normalize to 5,000
      }),
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    },
    monthly_stats_tiles: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      net_sales_month: Number(((Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000) * (1 - Math.random() * 0.1)).toFixed(2)), // 0% to 10% discount
      average_sale_month: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      items_sold: Math.floor(Math.random() * (2000 - 500 + 1)) + 500, // 500 to 2,000
    },
    best_sellers: {
      yesterday: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 200 + 50).toFixed(2))), // 50 to 250
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100 + 20)), // 20 to 120
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
      last_week: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 1000 + 200).toFixed(2))), // 200 to 1,200
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 500 + 100)), // 100 to 600
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
    },
    daily_home_stats: {
      orders: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // 100 to 500
      total_sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)), // 300 to 1,500
      discounts: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2)), // 0 to 10% of total_sales
      average_sale: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      net_sale: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) - Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2))).toFixed(2)), // total_sales - discounts
      service_charge: Number((Math.random() * 15 + 5).toFixed(2)), // 5.00 to 20.00
    },
  },
  Cafe: {
    year_sales_graph: {
      total_sales_year: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000, // 10,000 to 50,000
      monthly_average: Number(((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12).toFixed(2)), // Derived from total_sales_year
      graph: Array.from({ length: 12 }, () => {
        const monthlyAvg = ((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12);
        return Number((Math.random() * (monthlyAvg * 2 - monthlyAvg * 0.5) + monthlyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (50000 / sum)).toFixed(2)); // Normalize to a reasonable total (e.g., 50,000)
      }),
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    average_growth_graph: {
      average_growth: Number((Math.random() * 10).toFixed(2)), // 0% to 10%
      percentages: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(2)), // -5% to 15%
        previous_year: Number((Math.random() * 30 - 10).toFixed(2)), // -10% to 20%
      },
      graph: Array.from({ length: 7 }, () => Number((Math.random() * 15).toFixed(2))), // 0% to 15%
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
      previous_3_weeks: {
        week0: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
        week1: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
      },
    },
    monthly_sales_graph: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      percentages: {
        previous_month: Number((Math.random() * 30 - 10).toFixed(2)), // -10% to 20%
        previous_year: Number((Math.random() * 40 - 15).toFixed(2)), // -15% to 25%
      },
      graph: Array.from({ length: 30 }, (_, i, arr) => {
        const total = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Recalculate for each run
        const dailyAvg = total / 30;
        return Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (5000 / sum)).toFixed(2)); // Normalize to 5,000
      }),
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    },
    monthly_stats_tiles: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      net_sales_month: Number(((Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000) * (1 - Math.random() * 0.1)).toFixed(2)), // 0% to 10% discount
      average_sale_month: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      items_sold: Math.floor(Math.random() * (2000 - 500 + 1)) + 500, // 500 to 2,000
    },
    best_sellers: {
      yesterday: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 200 + 50).toFixed(2))), // 50 to 250
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100 + 20)), // 20 to 120
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
      last_week: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 1000 + 200).toFixed(2))), // 200 to 1,200
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 500 + 100)), // 100 to 600
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
    },
    daily_home_stats: {
      orders: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // 100 to 500
      total_sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)), // 300 to 1,500
      discounts: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2)), // 0 to 10% of total_sales
      average_sale: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      net_sale: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) - Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2))).toFixed(2)), // total_sales - discounts
      service_charge: Number((Math.random() * 15 + 5).toFixed(2)), // 5.00 to 20.00
    },
  },
  Bakery: {
    year_sales_graph: {
      total_sales_year: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000, // 10,000 to 50,000
      monthly_average: Number(((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12).toFixed(2)), // Derived from total_sales_year
      graph: Array.from({ length: 12 }, () => {
        const monthlyAvg = ((Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000) / 12);
        return Number((Math.random() * (monthlyAvg * 2 - monthlyAvg * 0.5) + monthlyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (50000 / sum)).toFixed(2)); // Normalize to a reasonable total (e.g., 50,000)
      }),
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    average_growth_graph: {
      average_growth: Number((Math.random() * 10).toFixed(2)), // 0% to 10%
      percentages: {
        previous_week: Number((Math.random() * 20 - 5).toFixed(2)), // -5% to 15%
        previous_year: Number((Math.random() * 30 - 10).toFixed(2)), // -10% to 20%
      },
      graph: Array.from({ length: 7 }, () => Number((Math.random() * 15).toFixed(2))), // 0% to 15%
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
      previous_3_weeks: {
        week0: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
        week1: Number((Math.random() * 15 - 5).toFixed(2)), // -5% to 10%
      },
    },
    monthly_sales_graph: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      percentages: {
        previous_month: Number((Math.random() * 30 - 10).toFixed(2)), // -10% to 20%
        previous_year: Number((Math.random() * 40 - 15).toFixed(2)), // -15% to 25%
      },
      graph: Array.from({ length: 30 }, (_, i, arr) => {
        const total = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Recalculate for each run
        const dailyAvg = total / 30;
        return Number((Math.random() * (dailyAvg * 2 - dailyAvg * 0.5) + dailyAvg * 0.5).toFixed(2));
      }).map((value, i, arr) => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return Number((value * (5000 / sum)).toFixed(2)); // Normalize to 5,000
      }),
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    },
    monthly_stats_tiles: {
      total_sales_month: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // 1,000 to 5,000
      net_sales_month: Number(((Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000) * (1 - Math.random() * 0.1)).toFixed(2)), // 0% to 10% discount
      average_sale_month: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      items_sold: Math.floor(Math.random() * (2000 - 500 + 1)) + 500, // 500 to 2,000
    },
    best_sellers: {
      yesterday: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 200 + 50).toFixed(2))), // 50 to 250
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100 + 20)), // 20 to 120
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
      last_week: {
        names: ['Cinnamon Roll', 'Latte', 'Croissant', 'Espresso', 'Bagel'],
        sales: Array.from({ length: 5 }, () => Number((Math.random() * 1000 + 200).toFixed(2))), // 200 to 1,200
        counts: Array.from({ length: 5 }, () => Math.floor(Math.random() * 500 + 100)), // 100 to 600
        percentages: Array.from({ length: 5 }, () => Number((Math.random() * 20).toFixed(2))), // 0% to 20%
      },
    },
    daily_home_stats: {
      orders: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // 100 to 500
      total_sales: Number((Math.random() * (1500 - 300) + 300).toFixed(2)), // 300 to 1,500
      discounts: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2)), // 0 to 10% of total_sales
      average_sale: Number((Math.random() * 3 + 2).toFixed(2)), // 2.00 to 5.00
      net_sale: Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) - Number((Number((Math.random() * (1500 - 300) + 300).toFixed(2)) * Math.random() * 0.1).toFixed(2))).toFixed(2)), // total_sales - discounts
      service_charge: Number((Math.random() * 15 + 5).toFixed(2)), // 5.00 to 20.00
    },
  },
};