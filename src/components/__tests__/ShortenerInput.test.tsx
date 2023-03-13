import {render, screen, fireEvent} from "@testing-library/react"
import ShortenerInput from "../ShortenerInput"


test("input should be rendered", () => {
    render(<ShortenerInput setInputValue={() => {}}/>)
    const inputEl = screen.getByPlaceholderText("Paste a link here...")
    expect(inputEl).toBeInTheDocument()
})

test("submit button should be rendered", ()=> {
    render(<ShortenerInput setInputValue={() => {}}/>)
    const submitBtn = screen.getByRole("button")
    expect(submitBtn).toBeInTheDocument()
})

test("input should be empty", () => {
    render(<ShortenerInput setInputValue={() => {}}/>)
    const inputEl = screen.getByPlaceholderText("Paste a link here...")
    expect(inputEl).toHaveValue("")
})

test("input should be filled", () => {
    render(<ShortenerInput setInputValue={() => {}}/>)
    const inputEl = screen.getByPlaceholderText("Paste a link here...")
    fireEvent.change(inputEl, {target: {value: "https://www.google.com/"}})
    expect(inputEl).toHaveValue("https://www.google.com/")
})

test("input should be empty after submit button click", () => {
    render(<ShortenerInput setInputValue={() => {}}/>)
    const inputEl = screen.getByPlaceholderText("Paste a link here...")
    const submitBtn = screen.getByRole("button")
    fireEvent.change(inputEl, {target: {value: "https://www.google.com/"}})
    fireEvent.click(submitBtn)
    expect(inputEl).toHaveValue("")
})



