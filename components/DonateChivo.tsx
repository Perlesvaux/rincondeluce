"use client"

import Image from "next/image";
import { Chivo } from '@/assets'
import { useEffect, useState } from 'react';


export function DonateChivo() {

  const [text, setText] = useState("Bitcoin")

  const textHandler = () =>{
    navigator.clipboard.writeText("3DgeHYTfif7Neg5eLVTNgxEPd2gSbq2Pzq")
    setText("¡Copiado!")
  }



  useEffect(()=>{

    const delayHandler = () => {
      setText("Copiar al portapapeles")
    } 


    const timeout = setTimeout(delayHandler, 1500)

    return ()=>{

      clearTimeout(timeout)
    }
  },[text])


  return (    <>
          <button
        popoverTarget="pay_with_btc"
        className="
        inline-flex items-center gap-2.5
        px-5 py-2.5
        rounded-full
        font-semibold text-sm tracking-wide text-white
        select-none cursor-pointer
        transition-all duration-150
        shadow-md hover:shadow-lg active:shadow-sm
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009cde]
        active:scale-[0.97]
        bg-gradient-to-b from-[#009cde] to-[#0070ba]
        hover:from-[#00b0f4] hover:to-[#008fd4]
        active:from-[#007db8] active:to-[#005ea0]
        ">

    <Chivo />
      <span>Bitcoin</span>



    </button>

    <section popover="auto" className="fixed 
      w-[75svw]
      h-[45svh]
      overflow-y-auto
      top-1/2 
      left-1/2 
      -translate-x-1/2 
      -translate-y-1/2
      m-0
      p-4
      bg-gray-100
      rounded-lg
      text-black
      shadow-xl" id="pay_with_btc">




      <div className="flex flex-col  justify-center items-center">
      


  <div className="
  flex justify-center
  sm:w-1/3 
  ">

  <div className="relative h-50 w-50">
    <Image 
    src="/bitcoin.jpeg" 
    //placeholder="blur"
    //blurDataURL="/blur.webp"
    alt="Chivo Wallet QR"
    fill
    className="cover-contain"
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 33vw"
    />

  </div>
  </div>







    <button
      className="

        inline-flex items-center gap-2.5
        px-5 py-2.5
        rounded-full
        font-semibold text-sm tracking-wide text-white
        select-none cursor-pointer
        transition-all duration-150
        shadow-md hover:shadow-lg active:shadow-sm
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009cde]
        active:scale-[0.97]
        bg-gradient-to-b from-[#009cde] to-[#0070ba]
        hover:from-[#00b0f4] hover:to-[#008fd4]
        active:from-[#007db8] active:to-[#005ea0]

      "
      aria-label="Donate with ChivoWallet"
      onClick={textHandler}
    >
    <Chivo />
      <span className="text-xs">{text}</span>
    </button>

  </div>
    



    </section>
</>
  );
}

//(
//    <button
//      className="
//      "
//      aria-label="Donate with ChivoWallet"
//      onClick={textHandler}
//    >
//    <Chivo />
//      <span>{text}</span>
//    </button>
//  )


    //<button
    //    popoverTarget={id}
    //    className={opacity()}>
    //    { icon() }
    //
    //
    //
    //
    //</button>
    //
    //<section popover="auto" className="fixed 
    //  w-[90svw]
    //  h-[50svh]
    //  overflow-y-auto
    //  top-1/2 
    //  left-1/2 
    //  -translate-x-1/2 
    //  -translate-y-1/2
    //  m-0
    //  p-4
    //  bg-gray-800
    //  rounded-lg
    //  text-white
    //  shadow-xl" id={id}>
    //    <p className="text-yellow-300 font-black text-xl text-center">{url?link:title}</p>
    //    <div className="text-yellow-100 p-4 text-sm sm:text-base">{description}</div>
    //    {children}
    //</section>
