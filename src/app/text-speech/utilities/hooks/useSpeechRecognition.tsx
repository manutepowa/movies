"use client"
import { useState } from "react"

const SpeechRecognition =
  (window && window.SpeechRecognition) ||
  (window && window.webkitSpeechRecognition)
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang = "es-ES"

const synth = window && window.speechSynthesis
export default function useSpeechRecognition() {
  const [recording, setRecording] = useState(false)
  const [transcript, setTranscript] = useState<string>("")
  const [textList, setTextList] = useState<string[]>([])

  const handleListen = () => {
    if (!recording) {
      mic.start()
    } else {
      mic.stop()
    }

    mic.onend = () => {
      setRecording(false)
      if (transcript !== "") {
        setTextList([...textList, transcript])
        const speech = new window.SpeechSynthesisUtterance(transcript)
        speech.volume = 1
        speech.voice = synth.getVoices()[4]
        speech.rate = 1
        speech.pitch = 1
        synth.speak(speech)
        setTranscript("")
      }
      console.log("Stopped Mic on Click")
    }

    mic.onstart = () => {
      console.log("Mic on")
      setRecording(true)
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
      console.log(transcript)
      setTranscript(transcript)
    }

    mic.onerror = (event) => {
      console.log(event.error)
    }
  }
  return {
    recording,
    transcript,
    handleListen,
    textList,
  }
}
