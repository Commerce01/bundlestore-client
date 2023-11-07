"use client";
import useAuth from "@/hooks/use-auth";
import React, { useEffect } from "react";

function Wrapper({
  authToken,
  children,
}: {
  authToken: string | undefined;
  children: React.ReactNode;
}) {
  const { token } = useAuth();
  useEffect(() => {}, []);
  return <div>W</div>;
}

export default Wrapper;
