'use client'
import React, { useState } from 'react';
import { Player } from '@livepeer/react';

export default function Home() {

  const [text, setText] = useState('');

  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  

  return (
    <main className="flex p-24 flex-col">
      <p className='pb-4 font-black text-4xl'>
        Livepeer AI Studio
      </p>
      <div className="flex w-full">
        <div className="relative h-10 w-full min-w-[200px]">
          <input 
            type='text' 
            maxLength={380}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            value={text}
            onChange={handleChange}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Message LivepeerAI...
          </label>
        </div>
      </div>
        <div className='flex justify-end'>
          {text.length}/380
        </div>
        <div className="w-full pt-2 mb-8 mx-auto flex justify-start">
          <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Generate
          </button>
        </div>
      <div>
        <Player
          title="Livepeer: Real-time Video Streaming"
          playbackId={process.env.NEXT_PUBLIC_PLAYBACK_ID}
          showPipButton
          objectFit="cover"
          priority
          autoPlay
        />
      </div>
      <div className="w-full pt-8 mb-2 mx-auto flex justify-center">
        <div className="text-sm text-gray-700 py-1">
          Made with <span>❤️</span> by <a className="text-gray-700 font-semibold" href="https://livepeerinovatorsdao.com" target="_blank">Livepeer Innovators DAO</a>.
        </div>
      </div>
    </main>
  )
}