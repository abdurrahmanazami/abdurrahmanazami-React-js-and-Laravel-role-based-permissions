import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/login", { email, password });

      localStorage.setItem("token", res.data.token);

      const me = await api.get("/me");

      const role = me.data.roles[0]?.name;

      if (role === "admin") navigate("/admin");
      else if (role === "manager") navigate("/manager");
      else navigate("/user");

    } catch (err) {
      console.error(err.response?.data);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
