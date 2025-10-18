import Image from "next/image"
function Constante() {
    let copyright = new Date().getFullYear()
    const copyright_text=`copyright ${copyright} inspire.all right reserved`
    return(
    <div>{copyright_text}</div>
    )
    
}

function Text(){
    return(
        <h1 className="absolute font-bold top-60 px-2 left-72 text-3xl  text-white">Let's make <br/> <span className="text-[34px]">someting</span> <br/> memorable</h1>
    )
}
const Form=()=>{

    return(
        <div className="flex items-center h-screen justify-center mx-36">

            <div className=" w-[50%] h-full">
                <Image  className="relative  rounded h-full w-full object-cover"  width={750} height={890} src="/plant.jpg" alt="introuvable"/>
                <Text/>
            </div>

            <div className=" rounded  w-[50%] px-3 shadow">
                <form className=" py-32 text-gray-400  space-y-5 flex flex-col items-center justify-center">
                    <input    className="block border w-full  px-5 py-2 rounded border-gray-400"  type="text" placeholder="your name"/>
                    <input    className="block border w-full px-5 py-2 rounded border-gray-400"  type="text" placeholder="email"/>
                    <input    className="block border w-full px-5 py-2 rounded border-gray-400"  type="text" placeholder="subjet"/>
                    <textarea className="block border w-full px-5 py-2 rounded border-gray-400" placeholder="your message" id=""/>
                    <input type="submit" className="py-2 px-5 w-full rounded mt-3.5 border text-white bg-blue-600"/>
                    <Constante/>
                </form>
            </div>
        </div>
    )
}
export default Form