function Form(props) {

    const buttonHandler = (e) => {
        props.onSaveInputData(e.target.value)
    }

    return (
      <div>
          <button className="bg-red-300 px-4" value="0" onClick={buttonHandler}>0</button>
          <button className="bg-red-300 px-4" value="1" onClick={buttonHandler}>1</button>
          <button className="bg-red-300 px-4" value="2" onClick={buttonHandler}>2</button>
          <button className="bg-red-300 px-4" value="3" onClick={buttonHandler}>3</button>
          <button className="bg-red-300 px-4" value="4" onClick={buttonHandler}>4</button>
          <button className="bg-red-300 px-4" value="5" onClick={buttonHandler}>5</button>
          <button className="bg-red-300 px-4" value="6" onClick={buttonHandler}>6</button>
          <button className="bg-red-300 px-4" value="7" onClick={buttonHandler}>7</button>
          <button className="bg-red-300 px-4" value="8" onClick={buttonHandler}>8</button>
          <button className="bg-red-300 px-4" value="9" onClick={buttonHandler}>9</button>
          <button className="bg-red-300 px-4" value="AC" onClick={buttonHandler}>AC</button>
          <button className="bg-red-300 px-4" value="+" onClick={buttonHandler}>+</button>
          <button className="bg-red-300 px-4" value="-" onClick={buttonHandler}>-</button>

      </div>
    );
  }
  
  export default Form;
  