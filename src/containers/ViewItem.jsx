import React, { useEffect } from 'react'
import Table from '../components/Table/ViewItemTable'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Redux-Store/AppSlice'
import { showItemsByID } from '../Redux-Store/InventorySlice'
export default function ViewItem() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeName({ name: "View Item" }))
        dispatch(showItemsByID(id))
        // eslint-disable-next-line
    }, [id])
    const item = useSelector(state => state.inventory.itemByID)
    const Headers = ["Category:", "Item Name:", "Brand:", "Stock:", "Price In:", "Price Out:"]
    return (
        <section>
            <div className="bg-gray-50 min-h-screen pt-20">
                <div className="container mx-auto px-5 pt-5">
                    <div className='bg-white border-2 shadow-xl w-4/6 mx-auto'>
                        {item &&
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className='flex justify-center m-10'>
                                    <img src={item.image} alt="" className='h-72 shadow-sm rounded-xl' />
                                </div>
                                <div className='flex items-center '>
                                    <Table tableHeader={Headers} tableData={item} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
