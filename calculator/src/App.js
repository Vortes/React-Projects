import { useState } from "react";
import Display from "./Display.js";
import Form from "./Form.js";

function App() {

  const [num, setNum] = new useState()
  const saveInputHandler = (enteredData) => {
    setNum(prevNum => {if(prevNum !== undefined && prevNum !== "0") {
      return prevNum += enteredData
    } else {
      return enteredData
    }
  })
    if(enteredData === "AC") {
      setNum(0)
    }
  }

  return (
    <div>
      <Display inputNum={num}/>
      <Form onSaveInputData={saveInputHandler}/>
    </div>
  );
}

export default App;
