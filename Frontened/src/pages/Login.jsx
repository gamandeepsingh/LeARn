import React, { useState } from 'react'
import img from '../assets/login-side.png'
import './login.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validatediv() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='h-screen w-screen flex justify-center  items-center '>
            <div className='login-container w-[1080px] flex justify-center min-h-[70vh] items-center'>
                {/* left */}
                <div className=' hidden sm:hidden md:flex lg:flex xl:flex w-[50%] '>
                    <img src={img} width={"80%"} alt="" />
                </div>
                {/* right */}
                <div className="bg-white min-h-[400px] w-[100%] p-4 m-4 sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%] rounded-xl" >
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center relative'>
                        
                        <div className='flex flex-col'>
                            <label htmlFor='email'>Email</label>
                            <input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                className='rounded-2xl'
                            />
                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor='pass'>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name='pass'
                                className='rounded-2xl'
                            />
                        </div>
                        <button type="submit" disabled={!validatediv()}  className='bg-[red] text-white px-6 w-full py-1 rounded-2xl mt-8'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
