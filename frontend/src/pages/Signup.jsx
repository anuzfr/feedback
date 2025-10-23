import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/" className="text-blue-400">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
