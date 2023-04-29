import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/InventoryTable";
import { useSelector } from "react-redux";

export default function Inventory() {
    const Headers = ["Name", "Brand", "Price In", "Price Out", "Category", "Stock"]
    const InventoryData = useSelector((state)=>state.Inventory) 
    return (
        <section>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl font-medium py-7">Inventory</h1>
                    <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Link to="Add_Item"><button className="w-32 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                            Add Item
                        </button></Link>
                        <Table tableHeader={Headers} tableData={InventoryData} />
                    </div>
                </div>
            </div>
        </section>
    );
}
