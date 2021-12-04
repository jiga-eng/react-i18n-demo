import React, { useState } from "react";
import { ExampleComponent } from "./ExampleComponent";
import "./styles.css";
import { i18n } from "./translations/i18n";

export default function App() {
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">

      <select   onChange={handleOnclick}>
        <option selected value="en">English</option>
        <option value="hindi">Hindi</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>

      <ExampleComponent lang={language} />
    </div>
  );
}
