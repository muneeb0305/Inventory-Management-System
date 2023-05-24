import React from 'react'
import { useSelector } from 'react-redux'

export default function Button(props) {
    const toggle = useSelector(state=> state.appState.darkMode)
    return (
        <button {...props} className={`${toggle?'text-dark7 bg-dark8 hover:bg-dark9 ':'text-white bg-blue-600 hover:bg-blue-800 '} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4`}>
            {props.label}
        </button>
    )
}
