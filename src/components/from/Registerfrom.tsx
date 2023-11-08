"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import useAuth from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

function Registerfrom() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const address = addressRef.current?.value;
    if (!email || !password || !name || !phone || !address)
      return alert("NO NO NO");

    fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password, name, phone, address }),
      credentials: "include",
    })
      .then(() => router.push("/login"))
      .catch((e) => console.log(e));
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="space-y-1">
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                defaultValue="Bundle@gamil.com "
                ref={emailRef}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" ref={nameRef} />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" ref={passwordRef} />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" ref={phoneRef} />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="space-y-1">
              <Label htmlFor="address">Address</Label>
              <Input id="address" ref={addressRef} />
            </div>
          </div>
          <button>Summit</button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default Registerfrom;
