'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const register='/register'

    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState(null)

    const GetName = () => {
        if (email.includes("@")) {
            return email.split('@')[0]
        }
        return email
    }
    const Payload={
        firstName :GetName(), 
        password
    }
    const handleLogin=()=>{
        if( !email || !password){
            toast.error('please fill all fields')
            return
        }
        // console.log('Received Data:',Payload)
        // send the Payload to the localStorage
        localStorage.setItem("user" , JSON.stringify(Payload))
        toast.success("Register Succefully!")
        redirect('/loginhome')
    }
  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center'>
            <ToastContainer position='top-center'/>
        <div className='flex h-[500px] w-[900px] md:w-full shadow-md bg-white'>

            <div className='hidden w-1/2 h-[500px] rounded bg-emerald-800 md:flex items-center justify-center'>
                <Image className=' rounded  w-full h-full object-cover ' src="/portrait.jpg" alt='introuvable' width={860}  height={800} />
            </div>
       
            <div className='w-full md:w-1/2  h-[500px] shadow-gray-300 flex flex-col p-8 justify-center'>
                <Image className='border' src="/logo.png" width={200} height={760} alt="rose"/>
                <h2 className='text-2xl font-semibold mb-6'>Login to Your Account</h2>
                <form className='space-y-4'>
                    <div>
                    <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} id='email' className='w-full border border-gray-300 p-2 rounded outline-none' />
                    </div>
                    <div>
                    <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)} id='password' className='w-full border border-gray-300 p-2 rounded outline-none' />
                    </div>
                    <button type='button' onClick={()=>handleLogin()} className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'>Login</button>
                </form>
                <Link href={register} className='text-[12px]  mt-2'>n'avez-vous pas un compte?  <span className='text-blue-500 underline'>creer un compte!</span> </Link>
            </div>   
       </div>
    </div>
  )
}

export default page