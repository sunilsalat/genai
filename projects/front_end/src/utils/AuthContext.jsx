import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { Account, ID } from 'appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
        let response = await account.createEmailSession(userInfo.email, userInfo.password);
       let accountDetails = await account.get();
      localStorage.setItem("access_token", accountDetails.$id);
      localStorage.setItem("username", accountDetails.email);
      setUser(accountDetails);
    } catch (error) {
      setError("Connexion / signing in is not working");
    }
    setLoading(false);
  }

  const logoutUser = async (navigate) => {
    await account.deleteSession('current');
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    setError(null);
    navigate('/');
  }

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {

    }
    setLoading(false);
  }

  const contextData = {
    user,
    error,
    loginUser,
    logoutUser,
    register,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthContext;
