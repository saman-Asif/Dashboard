import React, { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import { Routes, Route, Link } from "react-router";
import Dashboard from './components/Dashboard/Dashboard';
const App = () => {
  const [sideBarCollapsed , setSideBarCollapsed] = useState(false);

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 via-blue-800 to-indigo-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
       <Sidebar collapsed={sideBarCollapsed} onToggle={()=>setSideBarCollapsed(!sideBarCollapsed)}/>
       <div className='flex-1 flex-col flex overflow-hidden'>
        <Header sideBarCollapsed={sideBarCollapsed} onToggleSidebar={()=>setSideBarCollapsed(!sideBarCollapsed)}/>
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
          <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
            </div>
          </main>
       </div>
      </div>
    </div>
  )
}

export default App
