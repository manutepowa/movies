"use client"
import { SpeakerWaveIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"

interface PhraseProps {
  phrase: string
}

function useSpeechSynthesis({ phrase }: PhraseProps) {
  const synth = useRef<SpeechSynthesis>()
  const speech = useRef<SpeechSynthesisUtterance>()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      synth.current = window.speechSynthesis
      speech.current = new window.SpeechSynthesisUtterance(phrase)
      speech.current.volume = 1
      speech.current.voice = synth.current.getVoices()[4]
      speech.current.rate = 1
      speech.current.pitch = 1

      speech.current.onend = function () {
        console.log("onend")
        setIsPlaying(false)
      }
    }

    // return () => {
    //   console.log("cancel")
    //   synth.cancel()
    // }
  }, [])

  function play() {
    setIsPlaying(true)
    synth.current?.speak(speech.current as SpeechSynthesisUtterance)
  }
  return {
    play,
    isPlaying,
  }
}

export default function Phrase({ phrase }: PhraseProps) {
  const { play, isPlaying } = useSpeechSynthesis({ phrase })
  return (
    <button onClick={play} className={`flex items-center space-x-3`}>
      <SpeakerWaveIcon
        className={`${
          isPlaying && "text-green-600"
        } h-6 w-6 cursor-pointer hover:text-black`}
      />
      <span className={isPlaying ? "text-green-600" : ""}>{phrase}</span>
    </button>
  )
}
