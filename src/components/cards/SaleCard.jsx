import React from "react";

export default function SaleCard(props) {
    const { textColor,bgColor, icon, title, value } = props

    return (
        <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white ">
            <div className="p-4 flex items-center">
                <div className={`p-3 rounded-full ${textColor}  ${bgColor}  mr-4 `}>
                    {icon}
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        {title}
                    </p>
                    <p className="text-lg font-semibold text-gray-500 ">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}
