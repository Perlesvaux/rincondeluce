import {NavBar} from './NavBar'
import type { Tray } from "@/types"

export function Layout ({children}:Tray) {
return <div className="flex flex-col h-screen w-full">

  <NavBar />
  
  <div className="overflow-y-auto flex-1">
    
    {children}

  </div>
  
  <footer className="bg-gray-800 text-white p-4 text-sm text-center">
    ¡Guardame en tus favoritos! 🔖
  </footer>
</div>
}
