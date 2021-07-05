import { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="text"
      />
      <button
        onClick={async () => {
          await axios.post(
            "http://localhost:5000/login",
            {
              email,
              password,
            },
            { withCredentials: true }
          );
          alert("Logged In");
        }}
      >
        Login
      </button>
      <button
        onClick={async () => {
          await axios.post("http://localhost:5000/signup", {
            email,
            password,
          });
          alert("Signed Up");
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default App;
