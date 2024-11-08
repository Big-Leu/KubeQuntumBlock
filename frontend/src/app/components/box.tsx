"use client"
import { use, useEffect, useState } from "react";
import Form from "../components/form"
import Image from "next/image";
import {FormStore} from "@/store/user"
import Form2 from "./form2";
export default function Card({title,image,para,form,api,method}) {



    const [isVisible,setVisible] = useState(false);
    const handleClick = () => {
      console.log("clicked from biox")
      setVisible(true)
    }
    useEffect(() => {
      console.log("isVisible",isVisible)
    }, []);

    return (
      <div className="w-auto h-auto bg-inherit flex flex-col justify-center  items-center font-koulen space-y-2 py-2 rounded-md hover:bg-[#3c49bb]" onClick={handleClick}>
        <Image src={image} alt="image"/>
        <label className="font-semibold">{title} </label>
        <p className="max-w-[395px] px-[2rem] font-thin text-sm/normal">{para} </p>
        <div className="z-30">
        {title === "Test the Endpoint Command" ? (
          isVisible && <Form2 index={form} api={api} method={method} title={title} isVisible={isVisible}  setVisible={setVisible}  />
        ) : (
         isVisible && <Form index={form} api={api} method={method} title={title} isVisible={isVisible}  setVisible={setVisible}/>
        )}
        </div>
      </div>
    );
  }
  