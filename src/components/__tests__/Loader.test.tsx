import {render, screen} from "@testing-library/react"
import Loader from "../Loader"

test("loader image should render", () => {
    render(<Loader/>)
    const loaderEl = screen.getByAltText("loader")
    expect(loaderEl).toBeInTheDocument()
})