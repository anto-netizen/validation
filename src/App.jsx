import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(2);
  const [textarea, setTextArea] = useState('');

  const handleClick = () => {
   console.log(name, email, rating, textarea);
   if (!name || !email|| !textarea) {
    alert("All fields Required");
    return;
   }
   if (!email.includes("@")) {
    alert("Invalid email");
    return;
   }
   if (textarea.length < 20) {
    alert("Text area should be greater than 20");
    return;
   }
   alert("Form submitted successfully");
   setName('');
   setEmail('');
   setTextArea('');
  }
  const handleRating= (e) => {
    setRating(e.target.name)
  }
  return (
    <>
  <label>Name</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <label>Email</label>
        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Comments</label>
        <textarea name="" id="" value={textarea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
        <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
