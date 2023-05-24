import { HeartIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useSelector } from 'react-redux'

export default function TopSelling() {
  const toggle = useSelector(state=> state.appState.darkMode)

  return (
    <div className={`${toggle?'bg-dark4 text-dark2 border-2 border-dark2':"bg-white border-2"}  w-full p-5 shadow-lg`}>
      <div className='flex align-middle justify-between mb-7'>
        <div className='flex items-center'>
          <HeartIcon className="h-7 w-7  text-red-500" />
          <h2 className='text-xl pl-3'>Top Selling Products</h2>
        </div>
      </div>
      <ul className= {`${toggle?'divide-dark6':'divide-gray-200'} divide-y  flex  flex-col align-middle`} >
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center justify-between p-4">

            <div className="">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Jeans
              </p>

            </div>
            <div>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                9,200 Sell
              </p>
            </div>
          </div>
        </li>
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center justify-between p-4">

            <div className="">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Hoodies
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                8,600 Sell
              </p>
            </div>
          </div>
        </li>
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center justify-between p-4">

            <div className="">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Jackets
              </p>

            </div>
            <div>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                7,600 Sell
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
