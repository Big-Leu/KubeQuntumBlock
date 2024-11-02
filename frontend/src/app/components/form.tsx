import { api1 } from "../components/data";
import { useState } from "react";
import Image from "next/image";
import close1 from "../images/close.svg";
import Data from "../components/dataShow";

export default function Form({ index, api, method }) {
  const URL = "http://localhost:8080";
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(api1[index]);

  const sendData = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if we need to send data as query parameters (for PATCH and DELETE)
    let endpoint = `${URL}${api}`;
    let requestOptions: RequestInit = { method };

    if (method === "PATCH" || method === "DELETE") {
      const queryParams = new URLSearchParams(formData).toString();
      endpoint += `?${queryParams}`;
    } else {
      // For GET and POST, send JSON body data
      requestOptions = {
        ...requestOptions,
        headers: { "Content-Type": "application/json" },
        body: method === "GET" ? undefined : JSON.stringify(formData),
      };
    }

    try {
      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error with the request:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormClose = () => {
    window.location.href = "/home";
  };

  return (
    <div className="absolute top-[20%] left-[35%] w-[70vh] h-auto backdrop-blur-md rounded-md">
      <form
        className="font-koulen flex flex-col px-[2rem] space-y-[2rem] py-6 rounded-sm overflow-y-auto max-h-[70vh] scrollbar-none"
        onSubmit={sendData}
      >
        <div className="flex flex-row justify-between">
          <h1 className="text-white text-4xl">List the Pods</h1>
          <Image
            src={close1}
            alt="close"
            className="transition-all duration-300 hover:rotate-45"
            onClick={handleFormClose}
          />
        </div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            {key === "functionbody" ? (
              <textarea
                id={key}
                name={key}
                placeholder={value as string}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md text-black focus:outline-none w-full h-32 resize-none"
              />
            ) : (
              <input
                type="text"
                id={key}
                name={key}
                placeholder={value as string}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md text-black focus:outline-none w-full"
              />
            )}
          </div>
        ))}
        <button
          className="w-auto bg-purple-800 rounded-sm text-3xl py-2 hover:bg-purple-900"
          type="submit"
        >
          Submit
        </button>
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
      </form>
    </div>
  );
}
