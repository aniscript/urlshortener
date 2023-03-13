import {useEffect, useState, useCallback} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Loader from "./Loader";
const COMMON_URL = process.env.REACT_APP_BACKEND_URL;
const API_KEY = process.env.REACT_APP_API_KEY

type ResultsProps = {
    inputValue: string,
    setInputValue: (value: string) => void
}

type ShortenResponse = {
    shortURL: string
}

const Results = ({inputValue, setInputValue}: ResultsProps) => {
    const [shortenLinks, setShortenLinks] = useState<string[]>([])
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<boolean | unknown>(false)

    const fetchData = useCallback(async ()=> {
        const data = {
            domain: "81vg.short.gy",
            originalURL: inputValue,
        }
        try {
            setLoading(true);
            const res = await fetch(`${COMMON_URL}`, {
                method: "post",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    authorization: `${API_KEY}`,
                },
                body: JSON.stringify(data),
            });
            const response: ShortenResponse = await res.json();
            setShortenLinks((links) => [...links, response.shortURL]);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            setInputValue("")
        }
    }, [inputValue])

    useEffect(() => {
        if (inputValue.length) {
            fetchData()
        }
    },[fetchData, inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
       return () => clearTimeout(timer);
    }, [copied]);

    const handleCopyClick = useCallback(() => {
      setCopied(true);
    }, []);


    if (loading) {
      return <Loader/>;
    }
    if (error) {
      return <p className="noData">Something went wrong.</p>;
    }

    return (
    <>
      {shortenLinks.length > 0 &&
        shortenLinks.slice(0, 5).map((link, i) => (
          <div className="result" key={i}>
            <p>{link}</p>
           <CopyToClipboard text={link} onCopy={handleCopyClick}>
              <button className={copied ? "copied" : ""}>
                Copy to Clipboard
              </button>
            </CopyToClipboard> 
          </div>
        ))}
    </>
  );


}

export default Results;