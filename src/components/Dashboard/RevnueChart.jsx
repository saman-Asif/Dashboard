import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    Legend,
     Line, LineChart 
} from 'recharts'
const RevnueChart = () => {
    const data = [
        { name: 'Jan', sales: 8000, revenue: 6700 }, { name: 'Feb', sales: 3000, revenue: 6700 },
        { name: 'Mar', sales: 5000, revenue: 8700 }, { name: 'Apr', sales: 4500, revenue: 6800 },
        { name: 'May', sales: 6000, revenue: 6700 }, { name: 'Jun', sales: 5500, revenue: 6600 },
        { name: 'July', sales: 6000, revenue: 6700 }, { name: 'August', sales: 5500, revenue: 6700 },
        { name: 'September', sales: 6700, revenue: 7900 }, { name: 'October', sales: 5500, revenue: 9700 },
        { name: 'November', sales: 7000, revenue: 6700 }, { name: 'December', sales: 5500, revenue: 6700 },

    ];
    return (
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6'>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h3 className='text-xl font-bold text-slate-800 dark:text-white'>Revenue Chart</h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>Monthly Revenue and Expenses</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Revenue</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full'></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Expenses</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-80'>
              <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend/>
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevnueChart
