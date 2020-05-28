import React, { useState } from "react";
import "./Auth.css";

const Auth = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); // if you hardcode in something here you cant change it at all in the future on the site
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  // if using an integer here ^ just leave it as 0 not ''

  const title = () => {
    return login ? "Login" : "Signup";
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login); //will set it to the opposite of what login is, go through true and false

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const signupFields = () =>
    !login ? (
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    ) : null;

  return (
    <div>
      <form>
        <h1>{title()}</h1>
        {signupFields()}
        {/* //htmlFor looks for an ID that matches what we put after it. Just makes it more user friendly */}
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={loginToggle}>Login/Signup</button>
        <br />
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};
export default Auth;
