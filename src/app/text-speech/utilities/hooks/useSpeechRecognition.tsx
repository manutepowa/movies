"use client"
import { useEffect, useState } from "react"

let SpeechRecognition
let mic: SpeechRecognition

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition
      mic = new SpeechRecognition()
      mic.continuous = true
      mic.interimResults = true
      mic.lang = "es-ES"
    }
  }, [])

  return {
    recording,
    transcript,
    handleListen,
    textList,
  }
}
