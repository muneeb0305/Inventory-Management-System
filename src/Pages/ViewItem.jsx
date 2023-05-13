import React, { useEffect, useState } from 'react'
import Table from '../components/Table/ViewItemTable'
import { useParams } from 'react-router-dom'
import Inventory from '../Services/Inventory'
export default function ViewItem() {
    const { id } = useParams()
    const [Data, setData] = useState()
    useEffect(() => {
        Inventory.viewItem(id)
            .then((data) => { setData(data) })
            .catch((err) => { throw err })
    }, [id])
    const Headers = ["Category:", "Item Name:", "Brand:", "Stock:", "Price In:", "Price Out:"]
    return (
        <section>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl font-medium py-7">View Item</h1>
                    <div className='bg-white border-2 shadow-xl w-4/6 mx-auto'>
                        {Data &&
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className='flex justify-center m-10'>
                                    <img src={ Data.image} alt="" className='h-72 shadow-sm rounded-xl' />
                                </div>
                                <div className='flex items-center '>
                                    <Table tableHeader={Headers} tableData={ Data} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
