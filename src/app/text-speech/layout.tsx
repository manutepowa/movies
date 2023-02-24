"use client"
import AsideContainer from "@/components/containers/AsideContainer"
import MainContainer from "@/components/containers/MainContainer"
import Link from "next/link"

interface SpeechLayoutProps {
  children: JSX.Element
}

export default function SpeechLayout({ children }: SpeechLayoutProps) {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <MainContainer>{children}</MainContainer>
      <AsideContainer>
        <ul>
          <li>
            <Link
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              href="text-speech/speech-to-text"
            >
              Speech to text
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              href="text-speech/grammar"
            >
              Grammar check
            </Link>
          </li>
        </ul>
      </AsideContainer>
    </div>
  )
}
