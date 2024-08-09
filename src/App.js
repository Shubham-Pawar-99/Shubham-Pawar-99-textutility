import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Parent from './Components/Parent';



function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("null")
    }, 3000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("Dark");
      document.body.style.backgroundColor = "#031126";
      showAlert("Dark Mode Enabled", "success");
      // document.title = "TextUtil-DarkMode";
      setTimeout(() => {

      }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabled", "success");
      // document.title = "TextUtil-LightMode";
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtills" about="About Us" mode={mode} toogleMode={toogleMode} showAlert={showAlert} />
    
        <Alert alert={alert} />

        <Routes>

          <Route exact path="/about" element={<About mode={mode} />}  />

          <Route exact path="/" element={<div className="container my-3"><TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} /></div>} />

        </Routes>

        <Parent/>

      </Router>
    </>
  );
}

export default App;
