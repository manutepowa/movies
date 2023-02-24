"use client"
import useGrammar from "../store/useGrammar"
import CorrectedText from "./CorrectedText"

export default function GrammarResponse() {
  const grammar = useGrammar().checkedText
  const loading = useGrammar().loading
  const text = useGrammar().text

  if (grammar.matches === undefined || grammar.matches?.length === 0)
    return <h1>No errores</h1>
  if (loading) return <h1>Loading...</h1>

  // function prepareErrorText() {
  //   let errorText = text
  //   grammar.matches?.forEach((match: any) => {
  //     console.log(match.context.text)
  //     errorText = errorText.replace(
  //       match.context.text.substring(match.offset, match.offset + match.length),
  //       `<span class="bg-red-300 absolute">
  //         ${match.context.text.substring(
  //           match.offset,
  //           match.offset + match.length
  //         )}
  //       </span> `
  //     )
  //   })
  //
  //   return errorText
  // }
  return (
    <div>
      {/* Render grammar response based on LanguageTool API  */}
      <div className="flex flex-col gap-y-8">
        <CorrectedText text={text} matches={grammar?.matches} />
        {/* <div dangerouslySetInnerHTML={{ __html: prepareErrorText() }}></div> */}
        {/* {grammar.matches?.map((match: any, index: number) => ( */}
        {/*   <div key={index}> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Rule: </span> */}
        {/*       {match.rule.description} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Message: </span> */}
        {/*       {match.message} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Suggested correction: </span> */}
        {/*       {match.replacements[0].value} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Context: </span> */}
        {/*       {match.context.text} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Offset: </span> */}
        {/*       {match.offset} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Length: </span> */}
        {/*       {match.length} */}
        {/*     </p> */}
        {/*     <p className="text-sm"> */}
        {/*       <span className="font-bold">Error: </span> */}
        {/*       {match.context.text.substring( */}
        {/*         match.offset, */}
        {/*         match.offset + match.length */}
        {/*       )} */}
        {/*     </p> */}
        {/*   </div> */}
        {/* ))} */}
      </div>
    </div>
  )
}
