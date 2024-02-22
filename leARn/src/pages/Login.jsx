import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebase'; // Import Firebase authentication modules
import img from '../assets/login-side.png';
import './login.css';
import googleImg from '../assets/login/google.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
      Aos.init({ duration: 1200 });
    }, []);

    function validatediv() {
        return email.length > 0 && password.length > 0;
    }

    async function handleEmailPasswordLogin(event) {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            // Handle login error (e.g., display error message)
            console.error("Error signing in with email and password:", error);
        }
    }

    async function handleGoogleLogin() {
        try {
            await auth.signInWithPopup(googleAuthProvider);
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            // Handle login error (e.g., display error message)
            console.error("Error signing in with Google:", error);
        }
    }

    return (
        <div className='h-screen w-screen flex justify-center  items-center '>
            <div className='login-container w-[1080px] flex justify-center min-h-[70vh] items-center '>
                {/* left */}
                <div data-aos="fade-right" className=' hidden sm:hidden md:flex lg:flex xl:flex w-[50%] '>
                    <img src={img} width={"80%"} alt="" />
                </div>
                {/* right */}
                <div data-aos="flip-up" className="bg-white min-h-[400px] w-[100%] p-4 m-4 sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%] rounded-xl flex flex-col justify-center">
                    <h1 className='text-4xl font-[repo-extrabold] text-[red] text-center mb-2'>Login</h1>
                    <form onSubmit={handleEmailPasswordLogin} className='flex flex-col justify-center relative'>
                        
                        <div className='flex flex-col'>
                            <label htmlFor='email'>Email</label>
                            <input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                className='rounded-2xl border-2 border-gray-500 h-[40px] font-[repo-light] font-[25px] pl-4 text-[red]'
                            />
                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor='pass'>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name='pass'
                                className='rounded-2xl border-2 border-gray-500 h-[40px] font-[repo-light] font-[25px] pl-4 text-[red]'
                            />
                        </div>
                        <button type="submit" disabled={!validatediv()}  className='bg-[red] text-white px-6 mx-auto py-1 rounded-2xl mt-8 w-fit font-[repo-bold] border
                        hover:text-[red] hover:inset-2 hover:bg-white hover:border hover:border-[red] transition-all duration-200'>
                            Login
                        </button>
                    </form>
                    <hr  className='h-2 bg-gray-200 rounded-xl mt-4'/>
                    <p className='text-gray-600 text-center mb-4'>or</p>
                    <button onClick={handleGoogleLogin} className='flex gap-3 px-2 py-2 justify-center shadow-lg rounded-lg border border-gray-500 mx-auto transition-all duration-200 hover:shadow-2xl'>
                        <img src={googleImg} alt="googleImage" width={24} />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
