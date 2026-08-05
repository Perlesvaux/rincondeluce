import type {PingRedDotProps} from "@/types"

export function PingRedDot ({size="size-1"}:PingRedDotProps) {
  return<span className={`{relative flex ${size}}`}>
    <span className="absolute inline-flex  h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
    <span className={ `relative inline-flex ${size} rounded-full bg-red-500` }></span>
  </span>
}
