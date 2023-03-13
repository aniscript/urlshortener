import {useState} from "react"
import Background from "./components/Background";
import ShortenerInput from "./components/ShortenerInput"
import "./App.css";
import Results from "./components/Results";



function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="container">
      <ShortenerInput setInputValue={setInputValue}/>
      <Background/>
      <Results inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
