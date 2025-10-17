//initialise the new projet
// pour executer une fonction du navigateur
"use client"

import Link from "next/link"

const page =()=>{
  const conctactLink="/contact"
  return(
    <div className="bg-teal-800 w-full h-screen flex flex-col justify-center items-center  text-white">
      <h1 >Hello world maturin</h1>
      <Link href={conctactLink} className="bg-white rounded-2xl px-5 py-2 mt-5 text-black">suivant</Link>
    </div>
  )
}

export default page