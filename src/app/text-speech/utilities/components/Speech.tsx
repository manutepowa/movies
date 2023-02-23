import { MicrophoneIcon, StopIcon } from "@heroicons/react/24/solid"

interface Props {
  recording: boolean
  handleListen: () => void
}

export default function Speech({ recording, handleListen }: Props) {
  return (
    <div className="flex">
      <button
        className={`flex rounded-lg shadow-md ${
          recording ? "shadow-red-200" : "shadow-indigo-100"
        } px-4 py-2 space-x-2`}
        onClick={handleListen}
      >
        {recording ? (
          <>
            <StopIcon className="h-6 w-6 text-gray-700" />
            <p>recording ...</p>
          </>
        ) : (
          <>
            <MicrophoneIcon className="h-6 w-6 text-gray-700" />
            <p>press to record</p>
          </>
        )}
        {/* <p>Press to start</p> */}
      </button>
    </div>
  )
}
