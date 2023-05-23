import { CheckCircleIcon, ClipboardDocumentCheckIcon, DocumentCheckIcon, GiftIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Table from "../components/Table/OrderTable";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../features/App/AppSlice";
import { showOrders } from "../features/Orders/OrderSlice";
import Loader from "../components/Loader/Loader";

export default function OrderDetails() {
  const dispatch = useDispatch()
  const breadCrumb = { name: 'Order Details' }
  const [openTab, setOpenTab] = React.useState(1);
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Quantity", "Status", "Amount"]

  const [showLoader, setShowLoader] = useState(true)

  const Loading = useSelector(state => state.orders.loading)
  const Orders = useSelector((state) => state.orders.orders)

  useEffect(() => {
    dispatch(changeName(breadCrumb))
    dispatch(showOrders())
    setTimeout(() => {
      setShowLoader(Loading)
    }, 1000);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
      <section>
        <div className='bg-gray-50 min-h-screen pt-20'>
          <div className="container mx-auto px-5 pt-5">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul className="grid lg:grid-cols-6 pt-3 pb-4 md:grid-cols-4 gap-2 sm:grid-cols-3 border-b-4 pb" role="tablist">
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
                <div className="relative flex flex-col min-w-0 break-words w-full pt-5 ">
                  <div className="flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-red-500" tableData={Orders.orderPlaced} tableHeader={Headers} name="orderDetails" />
                        </div>
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-green-500" tableData={Orders.orderReceived} tableHeader={Headers} name="orderDetails" />
                        </div>
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-purple-500" tableData={Orders.orderPicked} tableHeader={Headers} name="orderDetails" />
                        </div>
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-orange-500" tableData={Orders.orderPackaged} tableHeader={Headers} name="orderDetails" />
                        </div>.
                      </div>
                      <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-green-500" tableData={Orders.orderShipped} tableHeader={Headers} name="orderDetails" />
                        </div>
                      </div>
                      <div className={openTab === 6 ? "block" : "hidden"} id="link3">
                        <div className='bg-white rounded-lg border-2 shadow-lg p-3'>
                          <Table color="bg-green-500" tableData={Orders.orderDelivered} tableHeader={Headers} name="orderDetails" />
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
