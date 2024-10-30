import { api } from "../components/data";
import { useState } from "react";
import Image from "next/image";
import close1 from "../images/close.svg"
export default function Form() {
    const [formData, setFormData] = useState(api[0]);
    const handleFormClose = () => {
        window.location.href = '/home';
      };
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    return (
      <div className=" absolute top-[20%] left-[35%]  w-[70vh] h-auto backdrop-blur-md rounded-sm">
            <form className=" font-koulen flex flex-col px-[2rem] space-y-[2rem] py-6 rounded-sm overflow-y-auto max-h-[70vh] scrollbar-none ">
                <div className="flex flex-row justify-between " >
                    <h1 className="text-white text-4xl">List the  Pods</h1>
                    <Image src={close1} alt="close" className=" transition-all duration-300 hover:rotate-45" onClick={handleFormClose} />
                </div>
                {Object.entries(formData).map(([key, value], index) => (
                    <div key={key}>
                        <label htmlFor={key} className="">
                            {key}
                        </label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            placeholder={value}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md text-black focus:outline-none w-full"
                        />
                    </div>
                ))}
                <button className="w-auto bg-purple-800 rounded-sm text-3xl py-2 hover:bg-purple-900" type="submit" >Submit</button>
            </form>
      </div>
    );
  }

