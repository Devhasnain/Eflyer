import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='space-x-1 items-center flex'>
        <span className='text-5xl font-bold'>E</span>
        <span className='text-gray-400 text-5xl font-semibold'>FLYER</span>
    </Link>
  )
}

export default Logo