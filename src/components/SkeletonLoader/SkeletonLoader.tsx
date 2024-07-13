import React from 'react';

import SkeletonLoaderCard from './SkeletonLoaderCard';

const SkeletonLoader: React.FC = () => {
  const loop = Array.from({ length: 4 }).map((_) => crypto.randomUUID());

  return (
    <div role="tree" className="px-4 pt-4 pb-6 flex flex-col gap-y-3">
      {loop.map((key) => (
        <SkeletonLoaderCard key={key} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
