
import Image from "next/image";
import TypedText from "./typed/page";
import Link from 'next/link'
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
    <div className= {` bg-green-800 md:space-y-4  md:flex  md:items-center md:h-screen h-[100%] md:justify-around  px-6 py-9`}>
      <div className="text-white  w-[100%] md:w-[50%]">
        <div className="">
          <Image className="hidden md:block h-[380px] px-0 w-80  object-cover" src="/white-logo.png"  width={850} height={1200} alt="introuvable"/>
        </div>
        <div className="space-y-3 w-[100%]">
          <h1 className="md:text-[36px]  text-[31px] font-bold">Wel<span className="text-pink-500">come  to</span> InkSpire</h1>
          <p   className="text-[16px] md:text-[17px]"> <TypedText/> </p>
          <div className="gap-3">
            <button className=" rounded shadow mr-3.5 text-black px-4 py-2  bg-white">Start writing</button>
            <Link href={'./register'} className="text-white  rounded shadow border  border-white  px-4 py-2">Explore blogs</Link>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0  h-[410px] w-[100%] md:w-[30%] md:h-screen ">
        <Image  className="object-cover h-full w-full" src="/girl.jpg" alt="introuvable" height={990} width={820} />
      </div>
    </div>
  )
}
