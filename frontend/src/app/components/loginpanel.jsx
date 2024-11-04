"use client"
import React, { useEffect, useRef, useState } from "react";
import github from "../images/git2.png"
import e1 from "../images/e1.svg"
import fb from "../images/fb.svg"
import Image from "next/image";
import mail from "../images/mail.svg"
import password1 from "../images/password.svg"
import eye from "../images/eye.svg"
const LoginPanel = ({login,setLogin}) => {
    // const [router1,setRouter] = useState(null);

    // useEffect(()=>{
    //     const router = useRouter();
    //     setRouter(router)
    // },[])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the page from refreshing
  
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Login Successful:', data); // Handle success (e.g., redirect)
          window.location.href = '/home';
        } else {
          console.error('Login Failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const handleGoogle = () => {
      try {
        window.location.href = "http://localhost:8080/auth/google"
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const handleGitHub = () => {
      try {
        window.location.href = "http://localhost:8080/auth/github"
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const handleclick = ()=>{
        setLogin(!login)
    }

 return(
   <div className={`w-full h-full overflow-hidden ${!login?" hidden":" "}`}>
        <div className="flex flex-col py-[13%]">
            <div className="flex flex-col px-[10%]">
                <label className=" text-black font-koulen text-3xl">log in to your account</label>
                <label className=" text-[#938888] font-koulen text-sm/3">welcome back! select method to log in:</label>
            </div>
            <div className=" flex  px-[10%] pt-[3%] space-x-4">
                <div className=" w-[30%] rounded-sm py-1 flex justify-center items-center bg-slate-50 hover:bg-slate-100 drop-shadow-xl shadow-black hover:scale-110">
                    <Image src={e1} alt="google logo"  onClick={handleGoogle}/>
                </div>
                <div className=" w-[30%] rounded-sm py-1 flex justify-center items-center bg-slate-100 hover:bg-slate-100 drop-shadow-xl shadow-black hover:scale-110">
                    <Image src={github} alt="facebook logo" onClick={handleGitHub}/>
                </div>
            </div>
            <div className="relative px-[10%] pt-[5%]">
                <div className="bg-[#938888] h-[.18rem] w-[64%] "></div>
                <div className=" absolute bg-white mt-[-.9rem] ml-[15%] px-2">
                    <label className=" font-koulen text-[#938888]">or continue with email</label>
                </div>
            </div>
            <form className="pt-[6%] px-[10%] space-y-[2rem]" onSubmit={handleSubmit}>
                <div className="relative font-koulen">
                    <input
                    type="email"
                    className="border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <Image src={mail} alt="" className="absolute top-[30%] left-3" />
                </div>
                <div className="relative font-koulen">
                    <input
                    type="password"
                    className="border-2 border-[#C2BABA] h-[3.5rem] w-[80%] rounded-sm text-black focus:outline-none px-[3rem]"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <Image src={password1} alt="" className="absolute top-[25%] left-3" />
                    <Image src={eye} alt="" className="absolute top-[25%] left-[73%]" />
                </div>
                <div className="relative font-koulen flex items-center w-[80%]">
                    <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer border-2 border-gray-400 rounded-md accent-purple-900"
                    />
                    <label className="text-[#C2BABA] ml-2">remember me</label>
                    <label className="absolute text-[#722FA6] right-0">
                    forgot password?
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-[80%] h-[3.4rem] bg-[#722FA6] hover:bg-purple-900 flex items-center justify-center py-2 font-koulen text-2xl rounded-sm"
                >
                    LOG IN
                </button>
                <div
                    className="w-[80%] font-koulen flex justify-center hover:cursor-pointer"
                    onClick={handleclick}
                >
                    <label className="text-[#938888]">
                    Don’t have an account?{' '}
                    <span className="text-[#722FA6]">create an account</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
 );
};
export default LoginPanel;