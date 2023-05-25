import React, { useEffect, useState } from 'react'
import Table from './ViewInventoryItem'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../features/App/AppSlice'
import { showItemsByID } from '../features/Inventory/InventorySlice'
import Loader from '../components/Loader/Loader'
export default function ViewItem() {
    //get id from params to get item
    const { id } = useParams()

    const dispatch = useDispatch()
    const [showLoader, setShowLoader] = useState(true)
    //Table Headers
    const Headers = ["Category:", "Item Name:", "Brand:", "Stock:", "Price In:", "Price Out:"]
    //Redux States
    const Loading = useSelector(state => state.inventory.loading)
    const toggle = useSelector(state => state.appState.darkMode)
    const item = useSelector(state => state.inventory.itemByID)

    useEffect(() => {
        dispatch(changeName({ name: "View Item" }))
        dispatch(showItemsByID(id))
        setTimeout(() => {
            setShowLoader(Loading)
        }, 500);
        // eslint-disable-next-line
    }, [id])
    return (
        showLoader ? <Loader /> :
            <section>
                <div className={`${toggle ? "bg-dark3 pt-20" : 'bg-gray-100 pt-20'} min-h-screen `}>
                    <div className="container mx-auto px-5 pt-5">
                        <div className={`${toggle ? 'bg-dark7 border-dark2' : 'bg-white'} border-2 shadow-xl w-4/6 mx-auto`}>
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
