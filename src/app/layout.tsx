import NavBarDesktop from "@/components/NavBar/NavBar"
import NavToggle from "@/components/NavBar/NavToggle"
import { SidebarProvider } from "@/components/NavBar/SidebarContext"
import "@/styles/globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Titlepage",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="h-full bg-white">
      <body className="bg-manute">
        <div className="h-screen overflow-hidden">
          <SidebarProvider>
            <div className="flex h-full">
              <NavBarDesktop />
              <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <NavToggle />
                {children}
              </div>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
