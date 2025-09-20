import React from "react";

export default function RedButton({ text, }) {
    return (

        <button className="py-[10px]   bg-[#E7426A]  rounded-lg text-white  shadow-md hover:bg-red-500 transition">{text}</button>

    )
}