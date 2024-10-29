"use client"
import React, { useState } from "react";
import img1 from "../images/img.svg"
import e1 from "../images/e1.svg"
import fb from "../images/fb.svg"
import Image from "next/image";
import mail from "../images/mail.svg"
import password from "../images/password.svg"
import eye from "../images/eye.svg"
const SignupPanel = () => {
 return(
   <div className="w-full h-full">
        <div className="flex flex-col py-[6%]" >
            <div className="flex flex-col items-center">
                <label className=" text-black font-koulen text-3xl">sign UP your account</label>
            </div>
            <div className="relative px-[10%] pt-[5%]">
                <div className="bg-[#938888] h-[.18rem]  "></div>
                <div className=" absolute bg-white mt-[-.9rem] px-2 flex left-[32%]">
                    <label className=" font-koulen text-[#938888]">welcome back! select method to signup in:</label>
                </div>
            </div>
                <form className="mt-[6%]  space-y-[2rem]  flex flex-col pl-[15%]">
                    <div className="flex flex-row w-full gap-2 font-koulen">
                            <input type="email" className=" border-2 border-[#C2BABA] h-[3.5rem]  rounded-sm text-black focus:outline-none px-[.5rem] w-[39%]" placeholder="first name " required/>
                            <input type="email" className=" border-2 border-[#C2BABA] h-[3.5rem] rounded-sm text-black focus:outline-none px-[.5rem] w-[39%]" placeholder="last name " required/>
                    </div>
                    <div className=" relative   font-koulen">
                        <input type="email" className=" border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]" placeholder="email " required/>
                        <Image src={mail} alt="" className=" absolute top-[30%] left-3"/>
                    </div>
                    <div className=" relative   font-koulen">
                        <input type="password" className=" border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]" placeholder="password" required/>
                        <Image src={password} alt="" className=" absolute top-[25%] left-3"/>
                        <Image src={eye} alt="" className=" absolute top-[25%] left-[73%]"/>
                    </div>
                    <div className=" relative   font-koulen">
                        <input type="password" className=" border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]" placeholder="password" required/>
                        <Image src={password} alt="" className=" absolute top-[25%] left-3"/>
                    </div>
                    <div className=" relative font-koulen   flex items-center w-[80%]">
                        <input type="checkbox" className="h-4 w-4 cursor-pointer border-2 border-gray-400 rounded-md accent-purple-900"></input>
                        <label className="text-[#C2BABA] ml-2">remember me</label>
                    </div>
                    <div className="w-[80%] h-[3.4rem] bg-[#722FA6] hover:bg-purple-900 flex items-center justify-center py-2 font-koulen text-2xl rounded-sm">
                        <label className="">submit</label>
                    </div>
                </form>
        </div>
    </div>
 );
};
export default SignupPanel;