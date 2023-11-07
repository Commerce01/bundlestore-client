"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiSearch, BiCart, BiUser } from "react-icons/bi";
import Modal from "./modals/Modal";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="mx-6 flex justify-between items-center px-3 py-3">
      <div>
        <Image src="/assets/Bundle.jpg" alt="Logo" width={150} height={50} />
      </div>
      <div className="flex space-x-4 text-black items-center font-semibold py-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[75px] flex-col items-center py-4">
                  <li className="cursor-pointer py-3 hover:underline">anime</li>
                  <li className="cursor-pointer py-3 hover:underline">movie</li>
                  <li className="cursor-pointer py-3 hover:underline">
                    art toy
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/about"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/contact"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="relative flex items-center  w-[270px]">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-2 rounded-full outline-none bg-gray-300 w-full mr-2 "
        />
        <BiSearch className="text-3xl mr-2" />
        <BiUser className="text-3xl mr-2 " onClick={() => setOpen(true)} />
        {isOpen && <Modal onClick={() => setOpen(false)} />}
      </div>
    </div>
  );
}

export default Navbar;
