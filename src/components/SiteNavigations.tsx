import Link from 'next/link'
import React from 'react'

const Links=[
    'Mens',
    'Ladies',
    'Mackup',
    'Electronics',
    'Farnechers',
    'Books',
    'Digital Products',
    'Food',
    'Jewllaries',
    'Saloon',
    'Tracking'
]

const SiteNavigations = () => {
  return (
    <ul className='list-none flex items-center flex-row w-full shadow-sm'>
        {Links.map((item,index)=>{
            return (
                <li key={index} className='py-2 px-3 hover:bg-white transition duration'>
                    <Link href={'/'}>{item}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default SiteNavigations