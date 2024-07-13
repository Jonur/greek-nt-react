import React from 'react';

const SkeletonLoaderCard: React.FC = () => (
  <div role="treeitem" className="text-sm font-medium bg-white rounded-lg p-4">
    <header className="flex gap-x-2 items-center">
      <div className="w-6 h-6 bg-blue-30 rounded-full" />

      <div className="h-2 w-[100px] bg-blue-30 rounded" />

      <div className="h-2 w-[60px] bg-blue-30 rounded" />
    </header>

    <main className="flex gap-x-3 items-center pt-6 pb-4 border-b border-blue-20">
      <div className="flex gap-x-2 font-medium items-center">
        <div className="w-6 h-6 bg-blue-30 rounded-full" />
        <div className="h-2 w-[60px] bg-blue-30 rounded" />
      </div>

      <div className="h-2 w-3 bg-blue-30 rounded" />

      <div className="flex gap-x-2 font-medium items-center">
        <div className="w-6 h-6 bg-blue-30 rounded-full" />
        <div className="h-2 w-[60px] bg-blue-30 rounded" />
      </div>
    </main>

    <footer className="py-2 font-normal flex items-center justify-between gap-x-4">
      <div className="h-2 w-[230px] bg-blue-30 rounded" />
      <div className="w-6 h-6 bg-blue-30 rounded-full" />
    </footer>
  </div>
);

export default SkeletonLoaderCard;
