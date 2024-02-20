import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


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
      document.title = "TextUtil-DarkMode";
      setTimeout(() => {

      }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabled", "success");
      document.title = "TextUtil-LightMode";
    }

  }

  return (
    <>
      <Navbar title="TextUtills" about="About Us" mode={mode} toogleMode={toogleMode} showAlert={showAlert} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze below:" mode={mode} showAlert={showAlert} />
      </div>

    </>

  );
}

export default App;
