import { connect } from "react-redux";

const Counter = (props) => {
  console.log(props);
  const handleDecrement = () => {
    console.log("dec button clicked");
    props.dispatch({
      type: "DEC",
      payload: props.counter.count
    });
  };
  const handleIncrement = () => {
    console.log("inc button clicked");
    props.dispatch({
      type: "INC",
      payload: props.counter.count
    });
  };
  const handleReset = () => {
    console.log("reset button clicked");
    props.dispatch({
      type: "RESET",
      payload: props.counter.count
    });
  };
  return (
    <div className="App a">
      <p> Count:{props.counter.count} </p>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
      <button onClick={handleReset}> Reset </button>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Counter);
