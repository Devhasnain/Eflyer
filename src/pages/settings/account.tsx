import React from 'react';
import Settings from '@/components/Account/Settings';
import SettingWraper from '@/components/Settings/SettingWraper';

const Account = () => {
  return (
    <SettingWraper title='Account' subtitle='Account Settings'>
        <Settings/>
    </SettingWraper>
  )
}

export default Account