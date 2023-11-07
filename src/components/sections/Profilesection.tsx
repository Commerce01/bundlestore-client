"use client";
import useAuth from "@/hooks/use-auth";
import React from "react";
import Cookies from "js-cookie";
import Provider from "@/components/provider";
import { useRouter } from "next/navigation";

function ProfileSection() {
  const { user, logout, load, verifyToken } = useAuth();

  return (
    <div>
      <div className="flex justify-between items-center text-2xl py-4 p-9 ">
        <p>name</p>
        <p>{user.name}</p>
      </div>
      <div className="flex justify-between items-center text-2xl py-4  p-9">
        <p>ID</p>
        <p>{user.id}</p>
      </div>
      <div className="flex justify-between items-center text-2xl py-4 p-9">
        <p>phone</p>
        <p>{user.phone}</p>
      </div>
      <div className="flex justify-between items-center text-2xl py-4 p-9">
        <p>email</p>
        <p>{user.email}</p>
      </div>
      <div className="flex justify-between items-center text-2xl py-4 p-9">
        <p>address</p>
        <p>{user.address}</p>
      </div>
      <div className="flex justify-between items-center text-2xl py-4 p-9">
        <p>role</p>
        <p>{user.role}</p>
      </div>
    </div>
  );
}

export default ProfileSection;
