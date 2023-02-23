export default function Text({ transcript }: { transcript: string }) {
  return (
    <>
      {transcript && (
        <div className="absolute bg-indigo-50 bottom-8 text-lg px-4 py-2">
          {transcript}
        </div>
      )}
    </>
  )
}
