"use client"
import React, { useState } from "react";
import img1 from "../images/img.svg"
import Image from "next/image";
import Link from "next/link";
import LoginPanel from "../components/loginpanel"
import SignupPanel from "../components/signuppanel"
const Login = () => {
 return (
    <div className="w-screen h-screen flex flex-row">
        <div className="w-[50%] bg-white">
            {/* <LoginPanel/> */}
            <SignupPanel/>
        </div>
        <div className=" relative w-[50%] bg-[#50167D]">
            <div className=" absolute top-[25%] left-[20%] flex justify-center">
                <Image src={img1} alt="the logo" width={500}/>
            </div>
            <div className="absolute bottom-[5%] left-[25%] text-center flex flex-col">
                <label className="font-koulen text-xl">Connect with every application.</label>
                <label className="font-koulen text-xl text-[#C3C3C3]">Everything you need in one place whatever you need</label>
            </div>
        </div>
    </div>
 );
};

export default Login;