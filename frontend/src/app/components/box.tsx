"use client"
import { use, useEffect, useState } from "react";
import Form from "../components/form"
import Image from "next/image";
export default function Card({title,image,para}) {

    const [visible,setVisible] = useState(false);
    const handleclick = ()=>{
        setVisible(true)
    }

    return (
      <div className="w-auto h-auto bg-inherit flex flex-col justify-center  items-center font-koulen space-y-2 py-2 rounded-md hover:bg-[#b24ac7]" onClick={handleclick}>
        <Image src={image} alt="image"/>
        <label className="font-semibold">{title} </label>
        <p className="max-w-[395px] px-[2rem] font-thin text-sm/normal">{para} </p>
        {visible && <Form />}
      </div>
    );
  }
  