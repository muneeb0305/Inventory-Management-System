import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/InventoryTable";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import Searchbar from "../components/SearchBar/Searchbar";
import { changeName } from "../features/App/AppSlice";
import { showItems } from "../features/Inventory/InventorySlice";
import Loader from "../components/Loader/Loader";

export default function Inventory() {
    const dispatch = useDispatch()
    const Headers = ["Name", "Brand", "Price In", "Price Out", "Category", "Stock"]

    const [searchValue1, setSearchValue1] = useState('');
    const [showLoader, setShowLoader] = useState(true)

    const Loading = useSelector(state => state.inventory.loading)
    const Items = useSelector(state => state.inventory.items)
    const toggle = useSelector(state=> state.appState.darkMode)

    const handleSearch1 = (event) => {
        setSearchValue1(event.target.value);
    }

    let tableData = Items.filter(row => {
        if (row.itemName.toLowerCase().includes(searchValue1.toLowerCase())) {
            return true;
        }
        return false;
    });

    useEffect(() => {
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
        <div className={`${toggle?'bg-dark3':'bg-gray-100'} min-h-screen pb-4 pt-20`}>
                    <div className="container mx-auto px-5 pt-5">
                        <div className={` ${toggle?'bg-dark4 border-2 border-dark2':'bg-white border-2'} rounded-lg shadow-lg p-3`}>
                            <div className="px-4 flex justify-between align-middle items-center">
                                <Link to="Add_Item">
                                    <Button label={'Add Item'} />
                                </Link>
                                <Searchbar placeholder="Search By Name" value={searchValue1} onChange={handleSearch1} />
                            </div>
                            <Table tableHeader={Headers} tableData={tableData} />
                        </div>
                    </div>
                </div>
            </section>
    );
}
