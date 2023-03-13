import {useState} from "react"

type InputProps = {
    setInputValue: (value: string) => void;
}

const ShortenerInput = ({setInputValue}: InputProps) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    };

    return (
        <div className="inputContainer">
            <h1>
                URL <span>Shortener</span>
            </h1>
            <div>
                <input
                    type="text"
                    placeholder="Paste a link here..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleClick}>Shorten</button>
            </div>
        </div>
    )
}

export default ShortenerInput