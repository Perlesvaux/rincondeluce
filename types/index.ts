import { StaticImageData } from "next/image"

export interface Tray {
  children:React.ReactNode,
}

export interface Summary {
  title: string,
  description:string | React.ReactNode,
}

export interface Item extends Summary {
  kind:kindTypes,
  url:string,
  image:StaticImageData | string,
  hasNew:boolean,
  legend:string | React.ReactNode,
}

export interface CardProps extends Item{
  children?:React.ReactNode,
}

export interface PopOverProps extends Summary{
  id:string,
  url?:string,
  transparency?:popOverTransparencies,
  type?:popOverIconTypes,
  children?:React.ReactNode,
}

type popOverIconTypes = 
  |"help"
  |"info"
  |"donation"

type popOverTransparencies = 
  |"opaque"
  |"clear"

type CornerPosition =
  |"top-right"
  |"top-left"
  |"bottom-right"
  |"bottom-left"

export interface CornerProps {
  children?:React.ReactNode,
  position?:CornerPosition,
}



export interface svgProps {
  h?:string,
  w?:string,
  f?:string,
}

type RedDotSize = 
  | "size-1"
  | "size-2"
  | "size-3"

export interface PingRedDotProps {
  size?:RedDotSize
}


export interface IconKindProps {
  kind?:kindTypes,
}

export type kindTypes = 
  |"app"
  |"playlist"
  |"book"