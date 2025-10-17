'use client'

import { FaHeart } from "react-icons/fa6";
import Image from "next/image"
import { useState } from "react"


// gestion de l'icone
export const metada={
    title:"nouvelle inspiration",
    description:"soyez inspirer et dynamique",
    icons: {
    icon: "/favicon.ico", // or '/icon.png'
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Welcome to Inkspire",
    description: "Unleash Your Creativity with Inkspire and create your next blog article",
    url: "https://www.inkspire.com", // your real domain here
    siteName: "Inkspire",
    images: [
      {
        url: "/og-image.jpg", // your preview image in /public
        width: 1200,
        height: 630,
        alt: "Inkspire — Unleash Your Creativity",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Welcome to Inkspire",
    description: "Unleash Your Creativity with Inkspire and create your next blog article",
    images: ["/og-image.jpg"],
    creator: "@InkspireOfficial", // optional
  },

}





const page=()=>{
    const [count,setCount]=useState(0)
    const [isVisible,setIsvisible]=useState(true)
    const [enterValue,setInterValue]=useState("")

    const nav=["About","contact","connexion"]
    return(
        <div className=" flex flex-col items-center space-y-5  justify-center h-full bg-green-600 text-2xl">

            {/* partie de navigation */}
            <nav className="shadow bg-white flex justify-between items-center w-full px-5 h-16 pt-1.5 text-[18px]">
                <div>
                    <Image  className="h-16 object-cover" src="/logo.png" alt="introuvable" width={100} height={760}/>
                </div>
                <ul className="flex gap-3.5 ">{
                    nav.map(element=>
                        <li>{element}</li>
                    )
                }</ul>
            </nav>

            <h1 className="text-6xl my-2.5 text-white">{count}</h1>
            <FaHeart size={50} color="#fff"/>
            <div className="flex gap-2">
                <button onClick={()=>setCount(count+1)} className="py-2 px-5  text-white rounded border">Increment</button>
                <button  onClick={()=> count>0 && setCount(count-1)} className="py-2 px-5  text-white rounded border">Decrement</button>
            </div>
            {
                isVisible && <Image src="/download.jpeg" width={400} height={300} alt="photo dynamique"/>
            }
            <button onClick={()=> setIsvisible(!isVisible)} className="border text-white px-5 py-2 rounded">setting</button>

            <input type="text" onChange={(e)=>setInterValue(e.target.value)}  placeholder="enter your name" className="outline-none py-1 px-1 mt-2 border text-shadow-black rounded bg-white "/>
            <h1 className="text-white  p-5">{enterValue}</h1>

        </div>
    )
}
export default page