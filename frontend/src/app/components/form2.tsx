import { api1 } from "../components/data";
import { useState,useEffect } from "react";
import Image from "next/image";
import close1 from "../images/close.svg";
import Data from "../components/dataShow";
import {FormStore} from "@/store/user"

export default function Form2({ index, api, method, title , isVisible, setVisible}) {

  const handleClick = (event: any) => {
    event.stopPropagation();
    console.log(isVisible)
    setVisible(false)
  }
  const { fetchEndData, EndData } = FormStore();
  useEffect(() => {
    fetchEndData();
  }, [fetchEndData]);
  console.log("the data is there:=",EndData)
  const URL = "http://localhost:8080";
  const URL2 = "http://localhost:5000";
  const [data, setData] = useState(null);

  const handleExecute = async () => {
    try {
      const response = await fetch(`${URL2}/getusers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="absolute top-[20%] left-[35%] w-[70vh] h-auto backdrop-blur-md rounded-md">
      <div
        className="font-koulen flex flex-col px-[2rem] space-y-[2rem] py-6 rounded-sm overflow-y-auto max-h-[70vh] scrollbar-none"
      >
        <div className="flex flex-row justify-between" >
          <h1 className="text-white text-4xl">{title}</h1>
          <Image
            src={close1}
            alt="close"
            className="transition-all duration-300 hover:rotate-45"
            onClick={handleClick}
          />
        </div>
        {EndData.map((data, index) => (
          <div key={index} >
            <div className="flex justify-between text-xl">
              <label>{data.EndpointType}</label>
              <label>{data.EndpointName}</label>
            </div>
            <div className="flex justify-center">
             <button className="bg-emerald-400 py-2 px-4 rounded-md text-xl w-full mt-3" onClick={handleExecute}>Execute</button>
            </div>
          </div>
        ))}
        {data && (
            index === 3 ? (
                <pre className="text-white mt-4 bg-gray-800 p-4 rounded h-auto font-koulen">
                    {JSON.stringify(data, null, 2)}
                </pre>
            ) : (
                    <p
                        className="text-white mt-4 bg-gray-800 p-4 rounded h-auto"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(data, null, 2).replace(/\n/g, "<br />"),
                        }}
                    ></p>
            )
        )}
      </div>
    </div>
  );
}
