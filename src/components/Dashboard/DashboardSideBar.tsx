import React from 'react';
import Logo from '../Logo';
import DashboardNavigations from './DashboardNavigations';

const DashboardSideBar = () => {
  return (
    <div className='flex flex-col w-3/12 px-6 border-r'>
        <div className='pb-8'>
            <Logo/>
        </div>
        <div className=''>
            <DashboardNavigations/>
        </div>
    </div>
  )
}

export default DashboardSideBar