"use client"
import React, { useState } from "react";
import img1 from "../images/img.svg"
import Image from "next/image";
import Link from "next/link";
import LoginPanel from "../components/loginpanel"
import SignupPanel from "../components/signuppanel"
const Login = () => {
    const [login, setLogin] = useState(true)
 return (
    <div className={`w-screen h-screen flex flex-row bg-white`}>
        <div className={`w-[50%] bg-white transition-all duration-500 ${!login?"translate-x-[50vw]":"translate-x-0" }`}>
            <LoginPanel login={login} setLogin={setLogin} />
            {!login && <SignupPanel  login={login} setLogin={setLogin}/>}
        </div>
        <div className={` w-[50%] bg-[#50167D] flex items-center justify-center transition-all duration-500 ${!login?"translate-x-[-50vw]":"translate-x-0" } `}>
            <div className=" absolute">
                <Image src={img1} alt="the logo" width={500}/>
            </div>
            <div className="  absolute text-center flex flex-col top-[85%]">
                <label className="font-koulen text-xl">Connect with every application.</label>
                <label className="font-koulen text-xl text-[#C3C3C3]">Everything you need in one place whatever you need</label>
            </div>
        </div>
    </div>
 );
};

export default Login;