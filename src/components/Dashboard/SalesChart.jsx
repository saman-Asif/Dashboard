import React from 'react'
import { PieChart , Pie, Cell, ResponsiveContainer, Tooltip,Legend } from 'recharts'
const SalesChart = () => {
     const data = [
{name: "Electronics", value: 45, color: '#3082f6'},
{name: "Clothing", value: 38, color:'#8b56fc'},
{name: "Books", value: 15, color:'#106981'},
{name: "Other", value: 10, color: '#f59e0b'}
]
  return (
    <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-slate-700 dark:text-white'>Sales by Category</h3>
        <p className='text-sm text-slate-500 dark:text-slate-400'>Production Distributiion</p>
      </div>
      <div className='h-48'>
      <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip 
              contentStyle={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              itemStyle={{ color: '#0f172a', fontSize: '14px' }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}  // Makes it a hollow donut circle
              outerRadius={90}
              paddingAngle={4}   // Creates gaps between segments
              dataKey="value"
            >{data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="transition-all duration-200 cursor-pointer"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='space-y-3'>
     {data.map((item,idx)=>{
        return (
            <div key={idx} className='fkex items-center justify-between'>
             <div className='flex items-center space-x-3'>
               <div className='w-3 h-3 rounded-full' style={{ backgroundColor : item.color}}/> 
                <span className='text-sm text-slate-600 dark:text-slate-400'>{item.name}</span>
                <div className='font-semibold text-sm text-slate-800 dark:text-white'>{item.value}%</div>
               </div>
            
             </div> 
        ) 
     })}
      </div>
    </div>
  )  
}

export default SalesChart
