import Reviews from '@/components/Profile/Reviews'
import UserDetails from '@/components/Profile/UserDetails'
import RouteShell from '@/components/auth/RouteShell'
import React from 'react'

const Profile = () => {
  return (
    <RouteShell title='Profile'>
        <Reviews/>
        <UserDetails classNames='border-l'/>
    </RouteShell>
  )
}

export default Profile