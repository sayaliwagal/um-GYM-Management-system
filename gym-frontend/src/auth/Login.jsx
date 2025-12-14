import { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await API.post("/auth/login", { email, password });
    login(res.data);

    if (res.data.role === "admin") navigate("/admin");
    else navigate("/member");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="input" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input className="input mt-2" type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}
          className="bg-black text-white w-full mt-4 p-2">
          Login
        </button>
      </div>
    </div>
  );
}
