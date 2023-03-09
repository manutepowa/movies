import NavBarDesktop from "@/components/NavBar/NavBar"
import NavToggle from "@/components/NavBar/NavToggle"
import "@/styles/globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Titlepage",
  // appLinks: [{}],
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="h-full bg-white">
      <body className="bg-manute">
        <div className="h-screen overflow-hidden">
          <div className="flex h-full">
            <NavBarDesktop />
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
              <NavToggle />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
