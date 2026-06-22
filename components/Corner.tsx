import type {CornerProps} from '../types'

export function Corner ({children, position="top-right"}:CornerProps){

  const edges = {
    "top-right": "right-1 top-1",
    "top-left": "left-1 top-1",
    "bottom-left": "left-1 bottom-1",
    "bottom-right": "right-1 bottom-1",
  }

  return (
    <div className={`absolute ${edges[position] ?? edges["top-right"]}`}>
      {children}
    </div>
  )

}
