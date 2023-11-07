import useAuth from "@/hooks/use-auth";
import { getToken } from "@/lib/get-token";
import React from "react";
import AuthTest from "./_component/auth-test";

async function AuthTestpage() {
  const token = getToken();
  const tokenAuth = token?.value;
  useAuth.setState({ token: tokenAuth });

  console.log(tokenAuth);
  return (
    <div>
      <AuthTest />
    </div>
  );
}

export default AuthTestpage;
