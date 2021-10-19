import { hiddenWord } from "../hiddenWord.js"

describe("hiddenWord", () => {
  it("returns aid if 637", () => {
    const result = hiddenWord(637)
    expect(result).toEqual("aid")
  })

  it("returns debt if 7415", () => {
    const result = hiddenWord(7415)
    expect(result).toEqual("debt")
  })

  it("returns email if 49632", () => {
    const result = hiddenWord(49632)
    expect(result).toEqual("email")
  })

  it("returns melted if 942547", () => {
    const result = hiddenWord(942547)
    expect(result).toEqual("melted")
  })
})
