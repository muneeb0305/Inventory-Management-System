
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkMode } from '../../features/App/AppSlice';

export default function Toggle() {
  const dispatch = useDispatch()
  const toggle = useSelector(state => state.appState.darkMode)

  return (
    <button onClick={() => dispatch(DarkMode())} class={`flex items-center justify-center  ${toggle?"hover:bg-dark2":'hover:bg-gray-200'}  p-1 rounded-lg focus:outline-none`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={toggle?"#D3D3D3":'#134b5f'} viewBox="0 0 24 24" strokeWidth={0.5} stroke={toggle?"#D3D3D3":'#134b5f'} className="w-6 h-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </button>

  );
}

