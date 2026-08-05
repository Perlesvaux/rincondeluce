//"use client"
import Image from "next/image";
//import {Corner} from './Corner'
import type {CardProps} from '@/types'
import { PopOver, PingRedDot, Corner } from '.'

// import { PlayList } from "@/assets/PlayList";
import { Icon } from "@/components/Icon";
//import { PingRedDot } from './PingRedDot'
//import { useState } from 'react'

// Shout out to WebDev Simplified  https://blog.webdevsimplified.com/2023-05/lazy-load-images/
//ffmpeg -i imageName.jpg -vf scale=20:-1 imageName-small.jpg

export function Card ({legend, title, image, url, hasNew, description, kind }:CardProps){

  //const [isReady, setIsReady] = useState(false)

  function slugify(text:string) : string {
    return text.toLowerCase().replace(/\s+/g, '-');
  }

  const slug = slugify(title); // "ave-christus-rex"

  return (
<div className="
relative
w-full 
flex flex-col  justify-center items-center
rounded-lg shadow-md 
overflow-hidden 
hover:shadow-lg transition-shadow
sm:flex-row  sm:max-w-[100svh]
flash-yellow
"
 id={slug}
>

  <div className="
  flex justify-center
  sm:w-1/3 
  ">

  <div className="relative h-40 w-50">
    <Image 
    src={image} 
    //placeholder="blur"
    //blurDataURL="/blur.webp"
    alt={title}
    fill
    className="object-cover"
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 33vw"
    />

  </div>
  </div>
  
  <div className="
  flex flex-col h-full max-w-[40svh] p-4
  sm:w-1/2 

  ">
    <div className="sm:text-justify">
      <a href={url} target="_blank" className="text-md gap-2 font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center sm:text-xl">
       <Icon kind={kind} /> <span>{title}</span>
      </a>
    </div>
    
    <div className="text-gray-600 text-sm sm:text-base">
      <p className="w-full">{legend}</p>
    </div>

  </div>

  <Corner>
    <PopOver
      id={title}
      url={url}
      title={title}
      description={description}
    />
  </Corner>

  {hasNew && <Corner> <PingRedDot size="size-2" /> </Corner>}

</div>
  )
}

