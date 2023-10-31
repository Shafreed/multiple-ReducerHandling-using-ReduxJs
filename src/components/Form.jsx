import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../redux/form/formAction";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "24px",
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        style={{ margin: "24px" }}
        onClick={() => dispatch(submitForm({ name, age }))}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
