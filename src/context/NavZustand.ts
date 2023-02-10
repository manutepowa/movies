import { create } from "zustand"

interface SideType {
  sidebarOpen: boolean
  setSidebarOpen: (g: boolean) => void
}

const useSidebarZustand = create<SideType>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (g) => set(() => ({ sidebarOpen: g })),
}))

export default useSidebarZustand
