import {render, screen} from "@testing-library/react"
import Background from "../Background"


test("should render 13 background elements", () => {
    render(<Background/>)
    const backgroundEl = screen.getAllByRole("listitem")
    expect(backgroundEl).toHaveLength(13)
})