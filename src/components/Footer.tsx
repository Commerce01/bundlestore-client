import React from "react";
import Image from "next/image";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";

function Footer() {
  return (
    <div className=" my-6 rounded-md px-3 py-3 ">
      <div className="mx-4 flex justify-center items-center text-4xl">
        <div className="font-bold py-3 px-3">
          <BiLogoFacebookCircle />
        </div>
        <div className="font-bold py-3 px-3">
          <BiLogoInstagramAlt />
        </div>
        <div className="font-bold py-3 px-3">
          <BiLogoTiktok />
        </div>
        <div className="font-bold py-3 px-3">
          <BiLogoYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
