import React from "react";
import Announcement from "./Announcement";
import Image from "next/image";
import Link from "next/link";

const Headers = () => {
  return (
    <div className="absolute w-full backdrop-blur-xl top-5 max-w-[1000px] left-1/3 mx-auto">
      <div className="p-5">
        <div className="flex justify-between items-center ">
          <Link href="/" className="flex justify-between items-center gap-x-2">
            <Image src="/token.svg" alt="pullix_logo" width={35} height={35} />
            <h1 className="font-bold text-2xl">Dogecoin20</h1>
          </Link>
          <button className="px-4 py-2 rounded-lg border border-black text-black">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
