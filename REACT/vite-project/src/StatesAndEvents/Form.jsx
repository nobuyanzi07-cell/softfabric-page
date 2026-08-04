/*
How to handle form input and events
*/
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChange = (e) => {
    setName(e.target.value);
  };
    const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
    const passwordOnChange = (e) => {
    setPassword(e.target.value);
  }; 

  const onSubmit = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={emailOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input type="password" onChange={passwordOnChange} />
        </div>
      </main>
      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      {/* Display the form data */}
      <div>
        <h4>Form Data</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
}

export default Form;