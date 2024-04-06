'use client';
import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from 'react-icons/fa';
import { FaPlay, FaPause } from 'react-icons/fa6';
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
} from 'react-icons/tb';

const Musicbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className="w-screen h-36 bg-[#022541] py-2 p-6 mt-4 rounded-t-lg flex items-center justify-between">
      <div>
        <p>Track Name</p>
        <p>Artist Name</p>
      </div>
      <div className="flex items-center gap-6 text-[18px]">
        <button>
          <TbPlayerSkipBackFilled />
        </button>
        <button onClick={handlePlayPauseClick}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button>
          <TbPlayerSkipForwardFilled />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6">
          {volume === 0 ? (
            <FaVolumeMute />
          ) : volume <= 60 ? (
            <FaVolumeDown />
          ) : (
            <FaVolumeUp />
          )}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Musicbar;
