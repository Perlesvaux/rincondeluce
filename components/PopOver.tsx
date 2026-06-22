import {Info} from '../assets'
import {Help} from '../assets'
import type {PopOverProps} from '../types'
export function PopOver ({id, title, description, url, children, about=false}:PopOverProps){


  const opaque = "p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"

  const clear ="p-2 rounded-full bg-white/10 hover:bg-black/10 active:bg-white/30 transition-all duration-200 " 

  const link = <a 
    href={url} target="_blank" className="underline">
      {title}
    </a>

  return (<>

    <button
        popoverTarget={id}
        className={about? opaque : clear}>
        {about? <Help f="yellow" w="25px" h="25px" /> : <Info f="darkslategray" w="25px" h="25px" />}


    </button>

    <section popover="auto" className="fixed 
      w-[90svw]
      h-[50svh]
      overflow-y-auto
      top-1/2 
      left-1/2 
      -translate-x-1/2 
      -translate-y-1/2
      m-0
      p-4
      bg-gray-800
      rounded-lg
      text-white
      shadow-xl" id={id}>
        <p className="text-yellow-300 font-black text-xl text-center">{url?link:title}</p>
        <div className="text-yellow-100 p-4 text-sm sm:text-base">{description}</div>
        {children}
    </section>
  </>)
}
