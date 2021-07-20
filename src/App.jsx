import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setName } from "./redux/user/user.actions";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
          dispatch(setName("sayan"));
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
      <button
        onClick={async () => {
          const res = await axios.get("http://localhost:5000/hamsters", {
            withCredentials: true,
          });
          console.log(res.data);
        }}
      >
        Get my hamsters
      </button>
      <p>This is = {user.name}</p>
    </div>
  );
}

export default App;
