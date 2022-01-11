import React, { useState } from "react";

const SignupClass = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [signupErrors, setSignupErrors] = useState({
    nameError: null,
     emailError: null,
    usernameError: null,
    passwordError: null,
    confirmpasswordError: null,
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
            : "password must be over 8 charcters, with small and capital letters and at least one special character.",
      });
    } else if (e.target.name === "nameRegex") {
      setSignup({
        ...signup,
        name: e.target.value,
      });

      setSignupErrors({
        ...signupErrors,
        nameError:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 6
            ? "Length must more than 6"
            : null,
      });
    } else if (e.target.name === "usernameRegex") {
      setSignup({
        ...signup,
        userName: e.target.value,
      });

      setSignupErrors({
        ...signupErrors,
        usernameError:
          e.target.value.length === 0
            ? "This Field is required"
            : userNameValidation(e.target.value) === true
            ? null
            : "username can't have spaces",
      });
    } else if (e.target.name === "confirmPassword") {
      setSignup({
        ...signup,
        confirmPassword: e.target.value,
      });

      setSignupErrors({
        ...signupErrors,
        confirmpasswordError:
          e.target.value === signup.password
            ? null
            : "confirm password doesn't match",
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
  const userNameValidation = (userName) => {
    const regex = /^\S+$/;
    if (regex.test(userName) === true) {
      return true;
    } else if (regex.test(userName) === false) {
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
      //console.log(regex.test(password));

      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // console.log(SignupClass);
  };
  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="m-5">
        <div  >
          <label htmlFor="nameRegex" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameRegex"
            name="nameRegex"
            onChange={(e) => handleEvent(e)}
            value={signup.name}
          />
          <div>
            <small className="text-danger">{signupErrors.nameError}</small>
          </div>
        </div>
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
        <div  >
          <label htmlFor="usernameRegex" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="usernameRegex"
            name="usernameRegex"
            onChange={(e) => handleEvent(e)}
            value={signup.userName}
          />
          <div>
            <small className="text-danger">{signupErrors.usernameError}</small>
          </div>
        </div>
        <div  >
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

        <div  >
          <label htmlFor=" reenterPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => handleEvent(e)}
            value={signup.confirmPassword}
          />

          <div>
            <small className="text-danger">
              {signupErrors.confirmpasswordError}
            </small>
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

export default SignupClass;
