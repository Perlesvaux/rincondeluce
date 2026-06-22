import type { Tray } from "../types"

export function GlassTray ({children}:Tray) {
    return <div className="flex flex-col items-center flex-wrap gap-4 justify-center p-4">
      {children}
    </div>
} 
