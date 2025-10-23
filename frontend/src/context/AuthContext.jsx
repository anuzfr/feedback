import { createContext, useContext, useState } from "react";
import { loginUser, signupUser } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const signup = async (email, password) => {
    const data = await signupUser(email, password);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
