import { ClipboardDocumentCheckIcon, ExclamationCircleIcon, ListBulletIcon } from '@heroicons/react/24/solid'
const DashboardCardData = [
  {
    color: "blue",
    icon: <ListBulletIcon className="h-14 w-14 shadow-lg rounded-lg p-3 bg-blue-500 shadow-blue-500" />,
    title: "Order Placed Today",
    value: "3",
  },
  {
    color: "orange",
    icon: <ExclamationCircleIcon className="h-14 w-14 shadow-lg rounded-lg p-3 bg-orange-500 shadow-orange-500" />,
    title: "Pending Orders",
    value: "0",
  },
  {
    color: "green",
    icon: <ClipboardDocumentCheckIcon className="h-14 w-14 shadow-lg rounded-lg p-3 bg-green-500 shadow-green-500" />,
    title: "Order Delivered",
    value: "1",
  },
];
export default DashboardCardData;