import React from 'react'
import { RingLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className='flex justify-center items-center pt-52'>
            <RingLoader color={"rgb(37 99 235)"} size={130} />
        </div>
    )
}
