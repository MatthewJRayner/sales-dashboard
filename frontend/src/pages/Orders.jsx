import React, { useState, useEffect } from 'react';
import OrdersDisplay from '../components/OrdersDisplay';
import { dummyStatsOrders } from '../utils/dummyStatsOrders';


function Orders() {
    
    const orders = dummyStatsOrders();
    const todayOrders = orders[0] ? [orders[0]] : [];
    const futureOrders = orders.slice(1);

    return (
        <div className='flex-col w-full'>
            <div className="bg-white shadow-md flex p-4 pt-5 pb-5 rounded-2xl text-md items-center w-full">
                <h1 className="text-gray-300 mr-4 md:mr-8 inline-block"><span className='text-black_text hidden md:inline-block'>BBB Dashboard </span> <span className='hidden md:inline-block'> | </span><span className='text-black_text md:text-gray-300 font-semibold md:font-normal'> Orders</span></h1>
            </div>
            <div className='mt-4'>
                <OrdersDisplay orders={todayOrders} title={`Today`}/>
            </div>
            <div className='mt-4'>
                <OrdersDisplay orders={futureOrders} title={`Upcoming`}/>
            </div>
        </div>
    );
}

export default Orders;