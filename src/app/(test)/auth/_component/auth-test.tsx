"use client";
import useAuth from "@/hooks/use-auth";
import cookies from "js-cookie";
import React, { useEffect } from "react";

function AuthTest() {
  const { login, user, token, logout, load, verifyToken } = useAuth();

  useEffect(() => {
    if (cookies.get("token")) {
      verifyToken();
      load();
    }
  }, []);
  return (
    <>
      {token ? (
        <>
          {token} {JSON.stringify(user)}
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={() => login("cm555@gmail.com", "12345678")}>
            login
          </button>
        </>
      )}
    </>
  );
}

export default AuthTest;
