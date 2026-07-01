import React from 'react'

const TableSection = () => {
    const getStatusColor = (status) => {
        switch (status) {
case "completed":
return "bg-emerald-108 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
case "pending":
return "bg-yellow-180 text-yellow-780 dark:bg-yellow-960/30 dark:text-yellow-400";
case "cancelled":
return "bg-red-180 text-red-700 dark:bg-red-969/38 dark:text-red-468";
default:
return "bg-slate-160 text-slate-706 dark:bg-slate-806 dark:text-slate-468";
        }}
return (
    <div className='space-y-6'>
        <div className='bg-white/80 dark:bg-slate-900/80 rounded-b-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-lg text-slate-800 dark:text-white'>Recent Orders</h3>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>Latest customer orders </p>
                    </div>
                    <button className='text-sm font-medium text-blue-500 hover:text-blue-600'>View All</button>
                </div>
            </div>
            {/* table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left text-sm font-semibold p-4 text-slate-600'>Order ID</th>
                            <th className='text-left text-sm font-semibold p-4 text-slate-600'>Product</th>
                            <th className='text-left text-sm font-semibold p-4 text-slate-600'>Amount</th>
                            <th className='text-left text-sm font-semibold p-4 text-slate-600'>Status</th>
                            <th className='text-left text-sm font-semibold p-4 text-slate-600'>Date</th>
                        </tr>
                        <tbody>
                            <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                                <td className='p-4'>
                                    <span className='text-sm font-medium text-blue'>Order ID</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-sm font-medium text-slate-800 dark:text-white'>Customer</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-sm font-medium text-slate-800 dark:text-white'>Product</span>
                                </td>
                                <td className='p-4'>
                                    <span className='text-sm font-medium text-slate-800 dark:text-white'>Amount</span>
                                </td>
                                <td className='p-4'>
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium text-slate-400 dark:text-white`}>Order Status</span>
                                </td>

                            </tr>
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    </div>
)
}

export default TableSection
