import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/InventoryTable";
import InventoryServive from "../API/Inventory";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../Redux-Store/actions";
import Button from "../components/Button/Button";

export default function Inventory() {
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
    return (
        <section>
            <div className="bg-gray-50 min-h-screen pt-20">
                <div className="container mx-auto px-5 pt-5">
                    <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Link to="Add_Item">
                            <Button label={'Add Item'} />
                        </Link>
                        <Table tableHeader={Headers} tableData={Data} />
                    </div>
                </div>
            </div>
        </section>
    );
}
