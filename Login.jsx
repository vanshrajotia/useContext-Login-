import React, { useState, useContext } from "react";
import UserContext from "../context/usercontext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="w-0.5 flex  flex-col gap-1">
      <h2 className="text-2xl mb-1">Login</h2>
      <input
        className="border rounded-md p-0.5 pl-1 w-fit"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        className="border rounded-md p-0.5 pl-1 w-fit"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="border-b-black w-fit p-1 rounded-md bg-blue-600 text-xl hover:cursor-pointer hover:bg-blue-800"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
