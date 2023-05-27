import React from 'react'

const SearchInput = () => {
  return (
    <div className='flex flex-row items-center justify-center lg:w-8/12'>
        <input type="search" className='flex bg-white py-2 px-3 w-full rounded-tl-lg rounded-bl-lg' placeholder='search product...' />
        <button className='bg-gray-200 px-3 py-2 rounded-tr-lg rounded-br-lg'>Search</button>
    </div>
  )
}

export default SearchInput