"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiX } from "react-icons/bi";
import Loginfrom from "../from/Loginfrom";
import Registerfrom from "../from/Registerfrom";

function Modal({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed bg-[rgba(0,0,0,.5)] flex w-full h-full items-center justify-center top-0 left-0 z-[9999]">
      <div className="absolute top-4 right-4 cursor-pointer" onClick={onClick}>
        <div className="p-2 bg-white rounded-full flex items-center">
          <BiX />
        </div>
      </div>
      <Tabs defaultValue="Register" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Register">Register</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Register">
          <Registerfrom />
        </TabsContent>
        <TabsContent value="Login">
          <Loginfrom />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Modal;
