import NavBarDesktop from "@/components/NavBar/NavBar"
import NavToggle from "@/components/NavBar/NavToggle"
import { SidebarProvider } from "@/components/NavBar/SidebarContext"
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-white">
      <head />
      <body>
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
