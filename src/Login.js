import React, { useState } from "react";

const LoginClass = () => {
  const [signup, setSignup] = useState({
    email: "",  
    password: "",
  });

  const [signupErrors, setSignupErrors] = useState({
     emailError: null,
    passwordError: null,
   
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleEvent = (e) => {
    if (e.target.name === "emailRegex") {
      setSignup({
        ...signup,
        email: e.target.value,
      });
     
      setSignupErrors({
        ...signupErrors,
         emailError:
          e.target.value.length === 0
            ? "email must be entered"
            : emailValidation(e.target.value) === true
            ? null
            : "email must be name@address.com",
      });
    } else if (e.target.name === "passwordRegex") {
      setSignup({
        ...signup,
        password: e.target.value,
      });

      setSignupErrors({
        ...signupErrors,
        passwordError:
          passwordValidation(e.target.value) === true
            ? null
            : "Password isn't valid.",
      });
    } else if (e.target.name === "nameRegex") {
      setSignup({
        ...signup,
        name: e.target.value,
      });

    }
  };

  const emailValidation = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email) === true) {
      return true;
    } else if (regex.test(email) === false) {
      return false;
    }
  };
  const passwordValidation = (password) => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (regex.test(password) === true) {
      console.log(regex.test(password));
      return true;
    } else if (regex.test(password) === false) {
      console.log(regex.test(password));

      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="m-5">
     
         
        <div  >
          <label htmlFor="emailRegex" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailRegex"
            aria-describedby="emailHelp"
            name="emailRegex"
            onChange={(e) => handleEvent(e)}
            value={signup.email}
          />
          <div>
            <small className="text-danger">{signupErrors. emailError}</small>
          </div>
        </div>
        <div>
          <label htmlFor="passwordRegex" className="form-label">
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="passwordRegex"
            name="passwordRegex"
            onChange={(e) => handleEvent(e)}
            value={signup.password}
          />

          <div>
            <small className="text-danger">{signupErrors.passwordError}</small>
          </div>
        </div>

      

        <div>
          <button onClick={togglePassword}>Show/Hide Password</button>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginClass;
