import ProfileSection from "@/components/sections/Profilesection";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function Profilepage() {
  const token = cookies().get("token");
  if (!token) return redirect("/login");

  return (
    <div>
      <ProfileSection />
    </div>
  );
}

export default Profilepage;
