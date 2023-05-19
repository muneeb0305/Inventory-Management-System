import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {
    const link = useSelector((state) => state.Auth.role)
    const breadCrumb = useSelector((state) => state.appState.changeName)
    return (
        <div class="bg-white p-4 flex items-center flex-wrap">
            <ul class="flex items-center">
                {
                    breadCrumb.map((data) => (
                        <li class="inline-flex items-center">
                            <p class="text-gray-600 hover:text-blue-500">
                                {data.name}
                            </p>
                            <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
