import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingIndicator = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <BeatLoader />
    </div>
  )
}

export default LoadingIndicator