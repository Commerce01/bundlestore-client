"use client";
import useAuth from "@/hooks/use-auth";
import React, { useEffect } from "react";
import cookies from "js-cookie";

function Provider({ children }: { children: React.ReactNode }) {
  const { load, verifyToken } = useAuth();
  useAuth();
  useEffect(() => {
    if (cookies.get("token")) {
      verifyToken();
      load();
    }
  }, []);
  return <div>{children}</div>;
}

export default Provider;
