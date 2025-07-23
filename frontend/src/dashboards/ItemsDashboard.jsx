import React, { useState } from 'react';
import Selector from '../components/Selector';
import StatsBlock from '../components/StatsBlock';
import DailyAverage from '../components/items-page/DailyAverage';
import RecentTime from '../components/items-page/RecentTime';
import WeekSalesDisplay from '../components/items-page/WeekSalesDisplay';
import MultiGraphPeriodDisplay from '../components/items-page/MultiGraphPeriodDisplay';
import { dummyStatsItems } from '../utils/dummyStatsItems';

const ItemsDashboard = () => {
    const [location, setLocation] = useState('Both');
    const stats = dummyStatsItems

    return (
        <div className='flex-col'>
            <div className="bg-white shadow-md flex p-4 rounded-2xl text-md items-center justify-center md:justify-start">
                <h1 className="text-gray-300 mr-4 md:mr-12 inline-block"><span className='text-black_text hidden md:inline-block'>BBB Dashboard </span> <span className='hidden md:inline-block'> | </span><span className='text-black_text md:text-gray-300 font-semibold md:font-normal'> Items</span></h1>
                <Selector 
                    label="Location: "
                    value={location}
                    options={['Both', 'Cafe', 'Bakery']}
                    onChange={setLocation}
                />
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
                {/* Left Side */}
                <div className='w-full lg:w-2/3 flex-col mt-0 lg:mt-4 lg:mr-2'>
                    <div className='w-full flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 lg:mr-2'>
                            <StatsBlock label='DAILY SALES' value={stats[`${location}`]?.daily_items_stats?.daily_sales?.sales} percentage={stats[`${location}`]?.daily_items_stats?.daily_sales?.percentage} />
                        </div>
                        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-2'>
                            <StatsBlock label='WEEKLY SALES' value={stats[`${location}`]?.weekly_sales?.sales} percentage={stats[`${location}`]?.weekly_sales?.percentage} />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <MultiGraphPeriodDisplay stats={stats[`${location}`]?.period_graphs}/>
                    </div>
                </div>
                {/* Right Side */}
                <div className='w-full lg:w-1/3 flex-col mt-4 lg:ml-2'>
                    <div className='w-full'>
                        <StatsBlock label='MONTHLY SALES' value={stats[`${location}`]?.monthly_sales?.sales} percentage={stats[`${location}`]?.monthly_sales?.percentage} />
                    </div>
                    <div className='w-full mt-4'>
                        <WeekSalesDisplay stats={stats[`${location}`]?.total_sales_last_week} label={'Total Sales (Last Week)'}/>
                    </div>
                    <div className='mt-4 w-full'>
                        <DailyAverage label='Daily Average (Last 7 Days)' count={stats[`${location}`]?.daily_average?.count} percent1={stats[`${location}`]?.daily_average?.percentage?.previous_week} percent2={stats[`${location}`]?.daily_average?.percentage?.previous_month} />
                    </div>
                    <div className='mt-4 w-full'>
                        <RecentTime label='Recent Time (Yesterday)' time={stats[`${location}`]?.daily_items_stats?.recent_time} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemsDashboard