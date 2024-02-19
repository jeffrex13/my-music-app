import React from 'react';

const Sidebar = () => (
  <div className="w-60 h-full bg-[#022541] p-5 rounded-r-lg">
    <h3 className="mb-8">Sidebar logo</h3>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
