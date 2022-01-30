function Display(props) {
    return (
      <div>
          <h1>user input: {props.inputNum ? props.inputNum : "0"}</h1>
      </div>
    );
  }
  
  export default Display;
  