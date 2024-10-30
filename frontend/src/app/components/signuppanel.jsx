"use client"
import React, { useState } from "react";
import img1 from "../images/img.svg"
import e1 from "../images/e1.svg"
import fb from "../images/fb.svg"
import Image from "next/image";
import mail from "../images/mail.svg"
import password from "../images/password.svg"
import eye from "../images/eye.svg"
const SignupPanel = ({login,setLogin}) => {

    const url = "http://locahost:8080"
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch(`http://localhost:8080/adduser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('User added successfully:', data);
                handleclick()
            } else {
                console.error('Error adding user:', data);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    const handleclick = ()=>{
        setLogin(!login)
    }
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
            <form onSubmit={handleSubmit} className="mt-[6%] space-y-[2rem] flex flex-col pl-[15%]">
            <div className="flex flex-row w-full gap-2 font-koulen">
                <input
                    type="text"
                    name="firstName"
                    className="border-2 border-[#C2BABA] h-[3.5rem] rounded-sm text-black focus:outline-none px-[.5rem] w-[39%]"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    className="border-2 border-[#C2BABA] h-[3.5rem] rounded-sm text-black focus:outline-none px-[.5rem] w-[39%]"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="relative font-koulen">
                <input
                    type="email"
                    name="email"
                    className="border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Image src={mail}alt="Mail Icon" className="absolute top-[30%] left-3" />
            </div>
            <div className="relative font-koulen">
                <input
                    type="password"
                    name="password"
                    className="border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Image src={password} alt="Password Icon" className="absolute top-[25%] left-3" />
                <Image src={eye} alt="Show Password" className="absolute top-[25%] left-[73%]" />
            </div>
            <div className="relative font-koulen">
                <input
                    type="password"
                    name="confirmPassword"
                    className="border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <Image src={password} alt="Password Icon" className="absolute top-[25%] left-3" />
            </div>
            <div className="relative font-koulen flex items-center w-[80%]">
                <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 cursor-pointer border-2 border-gray-400 rounded-md accent-purple-900"
                    checked={formData.remember}
                    onChange={handleChange}
                />
                <label className="text-[#C2BABA] ml-2">Remember Me</label>
            </div>
            <button
                type="submit"
                className="w-[80%] h-[3.4rem] bg-[#722FA6] hover:bg-purple-900 flex items-center justify-center py-2 font-koulen text-2xl rounded-sm"
            >
                Submit
            </button>
            <div className="text-[#722FA6] font-koulen flex justify-center">
                <label className="mr-[6rem]" onClick={handleclick}>
                    Already have an account?
                </label>
            </div>
        </form>
        </div>
    </div>
 );
};
export default SignupPanel;