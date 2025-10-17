import Image from "next/image"
function Text(){
    return(
        <h1 className="absolute font-bold top-60 px-2 left-72 text-3xl  text-white">Let's make <br/> <span className="text-[35px]">someting</span> <br/> memorable</h1>
    )
}
const Form=()=>{


    return(
        <div className="flex items-center justify-center mx-36 mt-20 ">

            <div className=" w-[50%] h-[390px] rounded">
                <Image  className="relative  h-full w-full object-cover"  width={100} height={760} src="/download.jpeg" alt="introuvable"/>
                <Text/>
            </div>

            <div className="w-[50%] rounded">
                <form className="text-gray-400 border py-8 space-y-5 flex flex-col items-center justify-center">
                    <input    className="block border  px-5 py-2 rounded border-gray-400"  type="text" placeholder="your name"/>
                    <input    className="block border  px-5 py-2 rounded border-gray-400"  type="text" placeholder="email"/>
                    <input    className="block border  px-5 py-2 rounded border-gray-400"  type="text" placeholder="subjet"/>
                    <textarea className="block border  px-5 py-2 w-[239px] rounded border-gray-400" placeholder="your message" id=""/>
                    <input type="submit" className="py-2 px-5 w-[239px] rounded mt-3.5 border text-white bg-blue-600"/>
                </form>
            </div>
        </div>
    )
}
export default Form