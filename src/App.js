import React, { useState } from "react";
import './App.css';

function AgeCalculator() {
  const [inputDate, setInputDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (inputDate) {
      const birthDate = new Date(inputDate);
      const currentDate = new Date();
      const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
      setAge(ageInYears);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="dob">Enter your age</label>
        <br />
        <input
          type="date"
          id="dob"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        /> 
        <div>
        <br />
        <button onClick={calculateAge}>Calculate Age</button>
        </div>
      </div> <br />
      {age !== null && (
        <div className="result"> <br />
          <p>You are {age} years old.</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
