import { useState } from 'react'

function App() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [area, setArea] = useState("");
    const [msg, setMsg] = useState("");

    const validate = () => {
        if (name.length < 3) {
            setMsg("Name should be at least 3 charachters");
            return false;
        }
        if (!mail.includes("@")) {
            setMsg("Enter valid email");
            return false;
        }
        if (area.length < 10) {
            setMsg("Enter your message with at least 10 charachters");
            return false;
        }
        setMsg("All good");
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Name: " + name);
            console.log("Email: " + mail);
            console.log("Message: " + area);
        }
    }

    return < > <
        input type = "text"
    placeholder = 'Name'
    value = { name }
    onChange = {
            (e) => setName(e.target.value
            }
            /> <input type = "email"
            placeholder = 'Email'
            value = { mail }
            onChange = {
                (e) => setMail(e.target.value)
            }
            /> <textarea placeholder = "Your message"
            value = { area }
            onChange = {
                (e) => setArea(e.target.value)
            }
            />  <button onClick = { handleSubmit } > submit </button > < / >  


            export default App;