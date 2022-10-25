import { howdy } from "./index"


describe('Howdy', () => {
  it('howdies', () => {
    const got = howdy()
    const want = true;

    expect(got).toEqual(want)

  })
})

export { }