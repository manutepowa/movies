import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface SideType {
  sidebarOpen: boolean
  setSidebarOpen: (g: boolean) => void
}

const useSidebarZustand = create<SideType>()(
  devtools((set) => ({
    sidebarOpen: false,
    setSidebarOpen: (g) => set(() => ({ sidebarOpen: g })),
  }))
)

export default useSidebarZustand
