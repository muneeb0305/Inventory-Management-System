import React from "react";
import { useSelector } from "react-redux";

export default function SaleCard(props) {
    const { textColor, bgColor, icon, title, value } = props
    const toggle = useSelector(state=> state.appState.darkMode)

    return (
        <div className={ `min-w-0 rounded-lg shadow-lg overflow-hidden ${toggle?"bg-dark4 border-b-4 border-dark2":"bg-white border-b-4 border-blue-300"} `}>
            <div className="p-4 flex items-center">
                <div className={`p-3 rounded-full  ${textColor}  ${bgColor}  mr-4 `}>
                    {icon}
                </div>
                <div>
                    <p className={`mb-2 text-sm font-bold ${toggle?"text-dark2":"text-gray-600"} `}>
                        {title}
                    </p>
                    <p className={`text-lg font-semibold ${toggle?"text-dark2":"text-gray-500"}`}>
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}
