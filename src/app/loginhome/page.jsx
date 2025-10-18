
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const page =()=>{

    const [user, setUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
        //getting user data from the local storage || check if user exist
        const userGotten = JSON.parse(localStorage.getItem('user'))
        if (!userGotten || !userGotten.firstName) {
          router.replace('/contact') // redirect client-side
        } else {
          setUser(userGotten)
        }
      }, [router])

    //   logout user
    const handleLogout =()=>{
    localStorage.removeItem('user')
    router.replace('/contact')
  }
  
  if (!user) {
    // Optional loading screen before redirect
    return (
        <div className="h-screen flex items-center 
      justify-center text-white text-2xl">
        Loading...
      </div>
    )
  }

    return (
        <div className="h-screen w-full bg-emerald-700 text-white text-5xl flex flex-col items-center justify-center">
            <h1>Welcome {user.firstName}</h1>
            <button onClick={handleLogout}  className="my-5 text-2xl cursor-pointer bg-black text-white p-2 rounded  transition">SignIn</button>
        </div>
    )
}

export default page