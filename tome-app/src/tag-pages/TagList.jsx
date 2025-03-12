import React from 'react';
import TopNav from '../TopNav';

function TagList() {
  return (
    <div className="flex h-screen w-full flex-col">
        <TopNav />
        <div className="flex h-screen w-full items-center justify-center">
            Tags here with their related artworks.
            </div>
    </div>
  )
}

export default TagList
