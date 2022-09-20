import "./Style.css";
import { useState } from "react";

export function FormInput(props) {
  const [focused, setFocused] = useState(false);

  function handleFocus(event) {
    setFocused(true);
  }
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  //   function handleInput(e) {
  //     const error = document.querySelector("#error");
  //     const inputField = document.querySelector("#input-field");
  //     if (e.target.name == "username") {
  //       if (e.target.value.match(pattern)) {
  //         error.style.display = "none";
  //         inputField.style.border = "2px solid green";
  //       } else {
  //         error.style.display = "block";
  //         inputField.style.border = "2px solid red";
  //       }
  //     }
  //     else if (e.target.name == "email") {
  //       if (e.target.value.match(pattern)) {
  //         console.log("SECONaD");
  //       } else {
  //         console.log("SECOND");
  //       }
  //     }
  //   }
  return (
    <div className="">
      <label>{label}</label>
      <input
        id="input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span id="error">{errorMessage}</span>
    </div>
  );
}

//
