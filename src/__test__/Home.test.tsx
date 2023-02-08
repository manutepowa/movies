import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "../app/page"

test("Test home", () => {
  render(<Home />)

  const title = screen.getByText(
    /Next \+ Tailwind \+ Typescript \+ Prettier \+ EsLint/i
  )
  expect(title).toBeDefined()
})
