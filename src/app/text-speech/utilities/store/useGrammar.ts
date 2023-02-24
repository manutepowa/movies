import { create } from "zustand"

interface GrammarType {
  text: string
  checkedText: string
  updateText: (text: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const options = {
  method: "POST",
  url: "https://dnaber-languagetool.p.rapidapi.com/v2/check",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "8c702bd6f5mshfef1ea618e2633fp1bd5f7jsn60fe261f6f32",
    "X-RapidAPI-Host": "dnaber-languagetool.p.rapidapi.com",
  },
}

const useGrammar = create<GrammarType>((set, get) => ({
  text: "",
  checkedText: "",
  updateText: (text: string) => set({ text }),
  handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const encodeParams = new URLSearchParams()
    encodeParams.append("language", "es-ES")
    encodeParams.append("text", get().text)

    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: encodeParams,
    })
    const data = await response.json()
    console.log({ data })
    set({ checkedText: data.matches[0].message })
  },
}))

export default useGrammar
