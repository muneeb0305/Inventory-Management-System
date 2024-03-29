import { CheckCircleIcon, ClipboardDocumentCheckIcon, DocumentCheckIcon, GiftIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../features/App/AppSlice";
import { showOrders } from "../features/Orders/OrderSlice";
import Loader from "../components/Loader/Loader";
import Alert from "../components/Alert/Alert";

export default function OrderDetails() {
  const dispatch = useDispatch()
  //Breadcrumb name
  const breadCrumb = { name: 'Order Details' }

  const [openTab, setOpenTab] = useState(1);
  const [showLoader, setShowLoader] = useState(true)
  //Table Headers
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Quantity", "Status", "Amount"]
  //Redux States
  const toggle = useSelector(state => state.appState.darkMode)
  const Loading = useSelector(state => state.orders.loading)
  const Orders = useSelector((state) => state.orders.orders)
  const error = useSelector((state) => state.orders.error.error)

  useEffect(() => {
    //BreadCrumb
    dispatch(changeName(breadCrumb))
    dispatch(showOrders())
    setTimeout(() => {
      setShowLoader(Loading)
    }, 500);
    // eslint-disable-next-line
  }, [])
  const mergedOrders = [].concat(
    Orders.orderPlaced,
    Orders.orderReceived,
    Orders.orderPicked,
    Orders.orderPackaged,
    Orders.orderShipped,
    Orders.orderDelivered
  );
  
  return (
    showLoader ? <Loader /> :
      <section>
        {error && Alert({ icon: 'error', title: error })}
        <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pt-20`}>
          <div className="container mx-auto px-5 pt-5">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul className={`grid lg:grid-cols-7 pt-3 pb-4 md:grid-cols-4 gap-2 sm:grid-cols-3 ${toggle ? 'border-b-4 border-dark5' : 'border-b-4'} pb`} role="tablist">
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded leading-normal " +
                      (openTab === 1 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(1); }}
                      data-toggle="tab" href="#link1" role="tablist">
                      <ShoppingCartIcon className="h-5 w-5" /><span className="mx-2 "> Order Placed</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                      (openTab === 2 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(2); }}
                      data-toggle="tab" href="#link2" role="tablist">
                      <CheckCircleIcon className="h-5 w-5" /><span className="mx-2 ">Order Received</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                        (openTab === 3 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(3); }}
                      data-toggle="tab" href="#link3" role="tablist">
                      <ClipboardDocumentCheckIcon className="h-5 w-5" /><span className="mx-2 ">Order Picked</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                        (openTab === 4 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(4); }}
                      data-toggle="tab" href="#link3" role="tablist">
                      <GiftIcon className="h-5 w-5" /><span className="mx-2 ">Order Packaged</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                        (openTab === 5 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(5); }}
                      data-toggle="tab" href="#link3" role="tablist">
                      <TruckIcon className="h-5 w-5" /><span className="mx-2 ">Order Shipped</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                        (openTab === 6 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(6); }}
                      data-toggle="tab" href="#link3" role="tablist">
                      <DocumentCheckIcon className="h-5 w-5" /><span className="mx-2 ">Order Delivered</span>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={"flex justify-center items-center text-xs font-bold uppercase px-3 py-3 shadow-lg rounded  leading-normal " +
                        (openTab === 7 ? `${toggle ? 'bg-dark5 text-dark2' : 'text-white bg-blue-600'} ` : `${toggle ? 'bg-dark2 text-dark5' : 'text-black bg-white'} `)}
                      onClick={e => { e.preventDefault(); setOpenTab(7); }}
                      data-toggle="tab" href="#link3" role="tablist">
                      <DocumentCheckIcon className="h-5 w-5" /><span className="mx-2 ">All Orders</span>
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words w-full pt-5 ">
                  <div className="flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                        <Table color="bg-red-500" tableData={Orders.orderPlaced} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <div className={`${toggle ? 'bg-dark4 border-orderReceived' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                        <Table color="bg-green-500" tableData={Orders.orderReceived} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                        <Table color="bg-purple-500" tableData={Orders.orderPicked} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                          <Table color="bg-orange-500" tableData={Orders.orderPackaged} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                          <Table color="bg-green-500" tableData={Orders.orderShipped} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 6 ? "block" : "hidden"} id="link3">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                          <Table color="bg-green-500" tableData={Orders.orderDelivered} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
                        </div>
                      </div>
                      <div className={openTab === 7 ? "block" : "hidden"} id="link3">
                        <div className={`${toggle ? 'bg-dark4 border-dark2' : 'bg-white'} rounded-lg border-2 shadow-lg p-3`}>
                          <Table color="bg-green-500" tableData={mergedOrders} tableHeader={Headers} updateLink={'update_order'} name="orderDetails" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
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
