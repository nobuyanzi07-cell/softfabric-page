import { useState } from "react";

function Form2 () {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",

});

    const nameOnChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            name: e.target.value,
        }));
    };
    const emailOnChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            email: e.target.value,
        }));
    };
    const phoneOnChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            phone: e.target.value,
        }));
    };
    const passwordOnChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            password: e.target.value,
        }));
    };

    const onSubmit = () => {
        console.log("Name:", input.name);
        console.log("Email:", input.email);
        console.log("Phone:", input.phone);
        console.log("Password:", input.password);
    }
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
                    <label>Phone</label>
                </div>
                <div>
                    <input onChange={phoneOnChange} />
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
                <ul>
                     <li>Name: {input.name}</li>
                     <li>Email: {input.email}</li>
                     <li>Phone: {input.phone}</li>
                     <li>Password: {input.password}</li>
                </ul>
            </div>
        </div>

    );
}

export default Form2;