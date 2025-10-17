



import Image from "next/image";
import TypedText from "../typed/page";
export const metadata = {
  title: "Nouvelle inspiration",
  description: "Soyez inspiré et dynamique",
  icons: {
    icon: "/favicon-min_1.ico",
    shortcut: "/favicon-min_1.ico",
    apple: "/favicon-min_1.ico",
  },
  openGraph: {
    title: "Welcome to Inkspire",
    description:
      "Unleash Your Creativity with Inkspire and create your next blog article",
    url: "https://www.inkspire.com",
    siteName: "Inkspire",
    images: [
      {
        url: "/og-image.jpg",
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
    description:
      "Unleash Your Creativity with Inkspire and create your next blog article",
    images: ["/og-image.jpg"],
    creator: "@InkspireOfficial",
  },
};


export default function Page() {
  return(
    <div className= {`bg-green-800 space-y-3  md:flex  md:items-center md:h-screen h-[100%] md:justify-around  px-6 py-9`}>
      <div className="text-white  w-[100%] md:w-[50%]">
        <Image className="h-[200px] p-0  w-80   object-cover" src="/white-logo.png"  width={100} height={760} alt="introuvable"/>
        <div className="space-y-3 w-[100%]">
          <h1 className="md:text-[36px]  text-[25px] font-bold">Wel<span className="text-pink-500">come  to</span> InkSpire</h1>
          <p   className="text-[16px] md:text-[17px]"> <TypedText/> </p>
          <div className=" px-7 flex gap-5">
            <button className=" rounded shadow mr-3.5 text-black px-2 py-5  bg-white">Start writing</button>
            <button className="md:bg-amber-100 md:text-black rounded shadow border md:border-none px-2 py-5">Explore blogs</button>
          </div>
        </div>
      </div>
      <div className="border  h-[410px] w-[100%] md:w-[30%] md:h-screen ">
        <Image  className="object-cover h-full w-full" src="/girl.jpg" alt="introuvable" height={760} width={100} />
      </div>
    </div>
  )
}
