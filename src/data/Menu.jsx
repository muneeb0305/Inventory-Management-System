import { BuildingStorefrontIcon, ChartBarIcon, ClipboardDocumentIcon, HomeIcon } from "@heroicons/react/24/solid";

export const adminMenu = [
  { title: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, path: '/Admin'},
  { title: "Order Details", icon: <ClipboardDocumentIcon className="w-6 h-6" />, path: '/Admin/Order_Details' },
  { title: "Sale Details", icon: <ChartBarIcon className="w-6 h-6" />, path: '/Admin/Sale_Details' },
  { title: "Inventory", icon: <BuildingStorefrontIcon className="w-6 h-6" />, path: '/Admin/Inventory' },
]

export const customerMenu = [
  { title: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, path: '/Customer' },
  { title: "View Orders", icon: <ClipboardDocumentIcon className="w-6 h-6" />, path: '/Customer/view_orders' },
];
