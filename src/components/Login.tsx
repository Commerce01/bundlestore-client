"use client";
import useAuth from "@/hooks/use-auth";
import cookies from "js-cookie";
import React, { useEffect, useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function Login() {
  const { login } = useAuth();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) return alert("No NO NO");
    login(email, password).then(() => router.push("/profile"));
    return;
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Fill the email and password for login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" ref={emailRef} />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">password</Label>
                <Input type="password" ref={passwordRef} />
              </div>
            </div>
            <button>login</button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}

export default Login;
