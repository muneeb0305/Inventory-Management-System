import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/InventoryTable";
import InventoryServive from "../API/Inventory";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../Redux-Store/actions";
import Button from "../components/Button/Button";
import Searchbar from "../components/SearchBar/Searchbar";

export default function Inventory() {
    const [searchValue1, setSearchValue1] = useState('');
    const handleSearch1 = (event) => {
        setSearchValue1(event.target.value);
      }
     
    const dispatch = useDispatch()
    dispatch(changeName({ name: 'Inventory' }))
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
    const Headers = ["Name", "Brand", "Price In", "Price Out", "Category", "Stock"]
    const [Data, setData] = useState([])
    const isDelete = useSelector((state) => state.appState.isDelete)
    useEffect(() => {
        InventoryServive.getItem()
            .then((data) => { setData(data) })
            .catch((err) => {
                Toast.fire({
                    icon: 'error',
                    title: err.error
                })
            })
        // eslint-disable-next-line
    }, [isDelete])
    let tableData = Data.filter(row => {
        if (row.itemName.toLowerCase().includes(searchValue1.toLowerCase())) {
          return true;
        }
        return false;
      });
    return (
        <section>
            <div className="bg-gray-50 min-h-screen pt-20">
                <div className="container mx-auto px-5 pt-5">
                    <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
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
