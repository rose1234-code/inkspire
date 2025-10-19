import Image from "next/image"
function Constante() {
    let copyright = new Date().getFullYear()
    const copyright_text=`copyright ${copyright} inspire.all right reserved`
    return(
    <div className=" text-center">{copyright_text}</div>
    )
    
}

function Text(){
    return(
        <h1 className="absolute font-bold top-60 px-2 left-72 text-3xl  text-white">Let's make <br/> <span className="text-[34px]">someting</span> <br/> memorable</h1>
    )
}
const Form=()=>{

    return(
        <div className="md:flex w-full items-center justify-center h-screen ">

            <div className=" w-[40%] h-full hidden md:block">
                <Image  className=" relative  rounded h-full w-full object-cover"  width={750} height={890} src="/plant.jpg" alt="introuvable"/>
                <Text/>
            </div>

            <div className="md:w-[42%] w-full">

                <div className="rounded px-3 w-full ">
                    <Image className=" md:hidden" src="/logo.png" width={200} height={460} alt="rose"/>
                    <form className="md:py-27.5 text-gray-400 w-full  space-y-5 flex flex-col items-center justify-center">
                        <input    className="block border w-full px-5 py-2 rounded border-gray-400"  type="text" placeholder="your name"/>
                        <input    className="block border w-full px-5 py-2 rounded border-gray-400"  type="text" placeholder="email"/>
                        <input    className="block border w-full px-5 py-2 rounded border-gray-400"  type="text" placeholder="subjet"/>
                        <textarea className="block border w-full px-5 py-2 rounded border-gray-400" placeholder="your message" id=""/>
                        <input type="submit" className=" text-center py-2  w-full rounded mt-3.5 text-white bg-blue-600"/>
                        <Constante/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form