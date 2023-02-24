import { create } from "zustand"

interface GrammarType {
  text: string
  checkedText: string
  loading: boolean
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
  text: "There is different types of texts and interactive exercises that practise the reading skills you need to do well in your studyes, to get ahead at work and to communicate in english in your free timerr.",
  checkedText: "",
  loading: false,
  updateText: (text: string) => set({ text }),
  handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const encodeParams = new URLSearchParams()
    encodeParams.append("language", "en-US")
    encodeParams.append("text", get().text)

    set({ loading: true })
    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: encodeParams,
    })
    const data = await response.json()
    set({ checkedText: data })
    set({ loading: false })
  },
}))

export default useGrammar
