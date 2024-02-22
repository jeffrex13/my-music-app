import React from 'react';

const Musicbar = () => (
  <div className="w-screen h-36 bg-[#022541] p-5 mt-4 rounded-t-lg flex items-center justify-between">
    <div>
      <p>Track Name</p>
      <p>Artist Name</p>
    </div>
    <div>
      <button>Prev</button>
      <button>Play</button>
      <button>Next</button>
    </div>
    <div>
      <p>Volume</p>
    </div>
  </div>
);

export default Musicbar;
