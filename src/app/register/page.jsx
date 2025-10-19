'use client'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const login='/login'

    const [firstName,setFirstName]=React.useState("")
    const [lastName,setLastName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")

    const Payload={
        firstName,
        lastName,
        email,
        password
    }

    const handleRegister=()=>{
        if(!firstName || !lastName || !email || !password){
            toast.error('please fill all fields')
            return
        }
        // console.log('Received Data:',Payload)
        // send the Payload to the localStorage
        localStorage.setItem("user" , JSON.stringify(Payload))
        toast.success("Register Succefully!")
        redirect('/home')
    }

  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center'>
        <ToastContainer position='top-center'/>
      <div className='flex h-[550px] w-[900px] shadow-md bg-white md:flex md:items-center md:justify-center'>
       
        <div className='md:w-1/2 w-full p-3 h-[500px]'>
          <Image src="/logo.png" width={100} height={760} />  
          <h2 className='text-2xl font-semibold mb-6'>Join Us</h2>
          <form className='space-y-3'>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>FirstName</label>
              <input type='text' onChange={(e)=>setFirstName(e.target.value)}  id='name' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>LastName</label>
              <input type='text' onChange={(e)=>setLastName(e.target.value)}  id='surname' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
              <input type='email' onChange={(e)=>setEmail(e.target.value)}  id='email' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
              <input type='password' onChange={(e)=>setPassword(e.target.value)}  id='password' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <button type='button'  onClick={()=>handleRegister()}  className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'>Register</button>
          </form>
          <Link href={login} className=" text-[12px] mt-2 py -2 text-center">avez-vous deja un compte? <span className='underline text-blue-500'>se connecter!</span></Link>
        </div>
        <div className='hidden  w-1/2 bg-emerald-800 h-[550px] md:flex items-center justify-center'>
          <Image className=' rounded  w-full h-full object-cover' src="/couple.jpg" alt='introuvable' height={100} width={760}/>
        </div>
       </div>
    </div>
  )
}

export default page