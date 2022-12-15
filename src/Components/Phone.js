import { connect } from "react-redux";
import React from "react";

const Phone = (props) => {
  console.log("props1", props);
  const handleDelete = (id) => {
    console.log("delete button clicked", id);
    props.dispatch({
      type: "DEL_PHONE",
      payload: id
    });
  };
  return (
    <div className="App">
      <h4> Phone Components </h4>
      <div className="phone-container">
        {props.phone.products.map((info) => {
          const { id, title, image, description, price } = info;
          return (
            <div key={id} className="phones">
              <h4> {title} </h4>
              <img src={image} alt={title} width={190} />
              <p> {description} </p>
              <button> {price} </button>
              <button onClick={() => handleDelete(id)}> Delete </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Phone);
