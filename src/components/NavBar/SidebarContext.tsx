"use client"
import { createContext, ReactNode, useContext, useState } from "react"

type Props = {
  sidebarOpen: boolean
  setSidebarOpen: (flag: boolean) => void
}

const sideBarContext = createContext<Props>({} as Props)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  return (
    <sideBarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </sideBarContext.Provider>
  )
}

export const useSidebar = (): Props => useContext(sideBarContext)
