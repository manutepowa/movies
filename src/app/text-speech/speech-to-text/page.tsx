"use client"
import Speech from "../utilities/components/Speech"
import Text from "../utilities/components/Text"
import TextList from "../utilities/components/TextList"
import useSpeechRecognition from "../utilities/hooks/useSpeechRecognition"

export default function SpeechToTextPage() {
  const { recording, transcript, handleListen, textList } =
    useSpeechRecognition()

  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-xl">Speech to text</h1>
      <Speech {...{ recording, handleListen }} />
      <TextList {...{ textList }} />
      <Text {...{ transcript }} />
    </div>
  )
}
