import React from 'react';
import { Skeleton } from '@nextui-org/react';

const SkeletonComponent = () => {
  return (
    <div className='flex items-center gap-4'>
      <div>
        <Skeleton className='flex h-12 w-12 rounded-full' />
      </div>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-3 w-3/5 rounded-lg' />
        <Skeleton className='h-3 w-4/5 rounded-lg' />
      </div>
    </div>
  );
};

export default SkeletonComponent;
