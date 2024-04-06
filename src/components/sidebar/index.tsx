import React from 'react';

const Sidebar = () => (
  <div className="w-60 h-full bg-[#022541] p-5 rounded-r-lg">
    <h3 className="mb-8">Sidebar logo</h3>
    <div className="flex flex-col gap-3">
      <a href="/home">Home</a>
      <a href="/discover">Discover</a>
      <a href="/top-artists">Top Artists</a>
      <a href="/top-songs">Top Songs</a>
    </div>
  </div>
);

export default Sidebar;
