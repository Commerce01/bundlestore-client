import useAuth from "@/hooks/use-auth";
import { getToken } from "@/lib/get-token";
import React from "react";
import Login from "../../components/Login";

function Authpage1() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Authpage1;
