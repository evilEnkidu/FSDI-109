import "./QuantityPicker.css";

function QuantityPicker(props) {
  // quantity is passed as a prop
  function handleIncrease() {
    let value = props.quantity + 1;
    props.onChange(value); // call parent function with new value
  }

  function handleDecrease() {
    if (props.quantity === 1) return; // prevent going below 1
    let value = props.quantity - 1;
    props.onChange(value); // call parent function with new value
  }

  return (
    <div className="qt-picker">
      <div className="inner">
        <button
          onClick={handleDecrease}
          disabled={props.quantity === 1}
          className="btn btn-sm btn-light"
        >
          -
        </button>
        <label>{props.quantity}</label>
        <button onClick={handleIncrease} className="btn btn-sm btn-light">
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityPicker;
