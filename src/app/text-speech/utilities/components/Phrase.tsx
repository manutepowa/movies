"use client"
import { SpeakerWaveIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

interface PhraseProps {
  phrase: string
}

let synth: SpeechSynthesis
let speech: SpeechSynthesisUtterance
function useSpeechSynthesis({ phrase }: PhraseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      synth = window.speechSynthesis
      speech = new window.SpeechSynthesisUtterance(phrase)
      speech.volume = 1
      speech.voice = synth.getVoices()[4]
      speech.rate = 1
      speech.pitch = 1

      speech.onend = function () {
        console.log("onend")
        setIsPlaying(false)
      }
    }

    return () => {
      synth.cancel()
    }
  }, [])

  function play() {
    setIsPlaying(true)
    synth.speak(speech)
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
