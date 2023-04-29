import { CheckCircleIcon, ClipboardDocumentCheckIcon, DocumentCheckIcon, GiftIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/solid";
import React from "react";
import OrderDeliveredData from "../data/OrderDeliverdData";
import OrderPackagedData from "../data/OrderPackagedData";
import OrderPickedData from "../data/OrderPickedData";
import OrderPlacedData from "../data/OrderPlacedData";
import OrderReceivedData from "../data/OrderReceivedData";
import OrderShippedData from "../data/OrderShippedData";
import Table from "../components/Table/Table";

export default function OrderDetails() {
  const [openTab, setOpenTab] = React.useState(1);
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Status", "Amount"]

  return (
    <section>
      <div className='bg-gray-50 min-h-screen'>
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-medium py-7">Order Details</h1>
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul className="grid lg:grid-cols-6 pt-3 pb-4 md:grid-cols-4 gap-2 sm:grid-cols-3 " role="tablist">
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded leading-normal " +
                    (openTab === 1 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(1); }}
                    data-toggle="tab" href="#link1" role="tablist">
                    <ShoppingCartIcon className="h-5 w-5" /><span className="mx-2 "> Order Placed</span>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                    (openTab === 2 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(2); }}
                    data-toggle="tab" href="#link2" role="tablist">
                    <CheckCircleIcon className="h-5 w-5" /><span className="mx-2 ">Order Received</span>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                      (openTab === 3 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(3); }}
                    data-toggle="tab" href="#link3" role="tablist">
                    <ClipboardDocumentCheckIcon className="h-5 w-5" /><span className="mx-2 ">Order Picked</span>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                      (openTab === 4 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(4); }}
                    data-toggle="tab" href="#link3" role="tablist">
                    <GiftIcon className="h-5 w-5" /><span className="mx-2 ">Order Packaged</span>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                      (openTab === 5 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(5); }}
                    data-toggle="tab" href="#link3" role="tablist">
                    <TruckIcon className="h-5 w-5" /><span className="mx-2 ">Order Shipped</span>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                      (openTab === 6 ? "text-white bg-blue-600" : "text-black bg-white")}
                    onClick={e => { e.preventDefault(); setOpenTab(6); }}
                    data-toggle="tab" href="#link3" role="tablist">
                    <DocumentCheckIcon className="h-5 w-5" /><span className="mx-2 ">Order Delivered</span>
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                <div className="flex-auto">
                  <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table tableData={OrderPlacedData} tableHeader={Headers} />
                      </div>
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table tableData={OrderReceivedData} tableHeader={Headers} />
                      </div>
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table tableData={OrderPickedData} tableHeader={Headers} />
                      </div>
                    </div>
                    <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table tableData={OrderPackagedData} tableHeader={Headers} />
                      </div>.
                    </div>
                    <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table tableData={OrderShippedData} tableHeader={Headers} />
                      </div>
                    </div>
                    <div className={openTab === 6 ? "block" : "hidden"} id="link3">
                      <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                        <Table color="bg-green-500" order="Order Delivered" tableData={OrderDeliveredData} tableHeader={Headers} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
