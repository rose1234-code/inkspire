
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page=()=>{
    useEffect(() => {
   //getting user data from the local storage || check if user exist
   const userGotten = JSON.parse(localStorage.getItem('user'))
   if (!userGotten || !userGotten.email) {
     router.replace('/login') // redirect client-side
   } else {
     setUser(userGotten)
   }
 }, [router])
    

    return(
        <div className="h-screen w-full bg-emerald-700 text-white text-5xl flex flex-col items-center justify-center">
            <h1>Welcome {user.firstName}</h1>
            <button onClick={()=>handleLogout()} className="my-5 text-2xl cursor-pointer bg-black text-white p-2 rounded  transition">SignOut</button>
        </div>
    )
}