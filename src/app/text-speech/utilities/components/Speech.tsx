import { MicrophoneIcon } from "@heroicons/react/24/solid"
export default function Speech() {
  const recording = true
  return (
    <div className="flex">
      <div className="flex rounded-lg shadow-md shadow-indigo-100 px-4 py-2 space-x-2">
        <MicrophoneIcon className="h-6 w-6 text-gray-700" />
        <p>recording ...</p>
        {/* <p>Press to start</p> */}
      </div>
    </div>
  )
}
