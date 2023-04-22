import { useState } from "react";
import "./App.css";

function App() {
  const WORDS_DISPLAY_LIST = ["apple", "pineapple", "mango", "banana"];
  let randomLoadWord = Math.floor(Math.random() * (3 - 0) + 0);
  let randomAnswerWord = Math.floor(Math.random() * (3 - 0) + 0);

  const [wordFirstDisplay, setWordFirstDisplay] = useState(WORDS_DISPLAY_LIST[randomLoadWord] );
  const [displayDivs, setDisplayDivs] = useState("none");
  const [savedinputWord, setSavedInputWord] = useState(
    WORDS_DISPLAY_LIST[randomAnswerWord]
  );
  const [inputWord, setInputWord] = useState("");
  const [resultWord,setResultWord] = useState("");
  const [displayForm, setDisplayForm] = useState("block");
  const [resetdisplayForm, setResetDisplayForm] = useState("none");
  const [resultSublit,setResultSublit] = useState("none")
 
  const timess = setTimeout(() => {
    setWordFirstDisplay("");
    setDisplayDivs("block");
    clearTimeout(timess);
  }, 500);

  function inputHandler(e){
    setInputWord(e.target.value);
  }
  function submitHandler(e){
    e.preventDefault();
    if(inputWord === savedinputWord){
      setDisplayForm("none");
      setResultWord("You won!")
      setResultSublit("block");
      setResetDisplayForm("block");
      randomAnswerWord = Math.floor(Math.random() * (3 - 0) + 0);
      setSavedInputWord(WORDS_DISPLAY_LIST[randomAnswerWord]);
      
    }else{
      setDisplayForm("none");
      setResultWord("You lose!");
      setResetDisplayForm("block");
      setResultSublit("block");
      randomAnswerWord = Math.floor(Math.random() * (3 - 0) + 0);
      setSavedInputWord(WORDS_DISPLAY_LIST[randomAnswerWord]);
    }
  }
  function rest(){
    setDisplayForm("block");
    setResetDisplayForm("none");
    setResultSublit("none");
    setInputWord("");

  }

  return (
    <div className="appdiv">
      <p>Mini Game</p>
      <p>{wordFirstDisplay}</p>
      <div style={{ display: displayDivs }}>
        
          <form onSubmit={submitHandler} style={{ display: displayForm }}>
            <div className="ler">
            <input
              value={inputWord}
              type="text"
              onChange={(e) => {
                inputHandler(e);
              }}
            ></input>

            <button>Check Answer</button>
            </div>
          </form>
        
        <p style={{ display: resultSublit }}>{resultWord}</p>
        <button style={{ display: resetdisplayForm }} onClick={rest}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
