import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import Searchbar from "../components/SearchBar/Searchbar";
import { changeName } from "../features/App/AppSlice";
import { showItems } from "../features/Inventory/InventorySlice";
import Loader from "../components/Loader/Loader";
import Alert from "../components/Alert/Alert";

export default function Inventory() {
    const dispatch = useDispatch()
    //Table Headers
    const Headers = ["Name", "Brand", "Price In", "Price Out", "Category", "Stock", "Action"]

    const [searchValue1, setSearchValue1] = useState('');
    const [showLoader, setShowLoader] = useState(true)
    //Redux States
    const Loading = useSelector(state => state.inventory.loading)
    const Items = useSelector(state => state.inventory.items)
    const toggle = useSelector(state => state.appState.darkMode)
    const error = useSelector((state) => state.inventory.error.error)


    const handleSearch1 = (event) => {
        setSearchValue1(event.target.value);
    }
    //Filter items for searching
    let tableData = Items.filter(row => {
        if (row.itemName.toLowerCase().includes(searchValue1.toLowerCase())) {
            return true;
        }
        return false;
    });

    useEffect(() => {
        //BreadCrumb
        dispatch(changeName({ name: 'Inventory' }))
        dispatch(showItems())
        setTimeout(() => {
            setShowLoader(Loading)
        }, 500);
        // eslint-disable-next-line
    }, [])

    return (
        showLoader ? <Loader /> :
            <section>
                {error && Alert({ icon: 'error', title: error })}
                <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pb-4 pt-20`}>
                    <div className="container mx-auto px-5 pt-5">
                        <div className={` ${toggle ? 'bg-dark4 border-2 border-dark2' : 'bg-white border-2'} rounded-lg shadow-lg p-3`}>
                            <div className="px-4 flex justify-between align-middle items-center">
                                <Link to="Add_Item">
                                    <Button label={'Add Item'} />
                                </Link>
                                <Searchbar placeholder="Search By Name" value={searchValue1} onChange={handleSearch1} />
                            </div>
                            <Table tableHeader={Headers} tableData={tableData} dataArr={['itemName','brand','priceIn','priceOut','category','stock']} updateLink={'update_Item'}  name={'Inventory'}/>
                        </div>
                    </div>
                </div>
            </section>
    );
}
