import { copyright_text } from "@/constante"
import Link from "next/link"


const page=()=>{
    return(
        <div className="flex flex-col items-center justify-center">
            <h1> About contact</h1>
            <h1>{copyright_text}</h1>
            <Link href="/" className="rounded mt-8 px-5 py-2 bg-amber-300  "> prev</Link>
        </div>
    )
}

export default page