import "./Style.css";
import { FormInput } from "./FormInput";
import { useState } from "react";

export function SignUpForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage: "Username should be between 3 and 25 characters.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Email Address Invalid",
      label: "Email",
      pattern:
        '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage:
        "Password should be 8 characters long and should contain 1 numeric, 1 lowercase, 1 Uppercase and one Special Character.",
      label: "Password",
      pattern:
        "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter Confirm Password",
      errorMessage: "Password not Matching.",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

 
  function handleClose(e){
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.style.display = "none";
  }

// function handleClick(e){
//     let modalContainer = document.querySelector("#modal-container");
//     modalContainer.style.display = "block";
// }
  function handleSubmit(e) {
    e.preventDefault();
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.style.display = "block";
  }
  return (
    <div id="" className="main-container">
      <form className="content" onSubmit={handleSubmit}>
        <div className="container">
          <h2>React SignUp Form</h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button id="submit-btn">Submit</button>
        </div>
      </form>
      <div id="modal-container">
        <div id="modal">
          <p>Thanks for Signing Up. You are Signed Up!</p>
          <div id="close-btn" onClick={handleClose}>&times;</div>
        </div>
      </div>
    </div>
  );
}

  