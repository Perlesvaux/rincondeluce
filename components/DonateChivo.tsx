"use client"
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
      setText("Bitcoin")
    } 


    const timeout = setTimeout(delayHandler, 1500)

    return ()=>{

      clearTimeout(timeout)
    }
  },[text])


  return (
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
      <span>{text}</span>
    </button>
  );
}
