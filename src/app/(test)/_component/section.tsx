"use client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { json } from "stream/consumers";

function Test({ token }: { token: RequestCookie | undefined }) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState();

  function handleSubmite(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
      credentials: "include",
    }).catch((e) => console.log(e));
  }

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/users", {
      headers: {
        authorization: "Bearer " + token?.value,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(token);

  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <form onSubmit={handleSubmite}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Test;
