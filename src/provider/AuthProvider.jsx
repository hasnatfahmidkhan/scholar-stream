import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  

  const authInfo = {
    user,
    setUser,
    authLoading,
    setAuthLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
