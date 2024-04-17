"use client";
import { wallets } from "./utils/wallets";
import Link from "next/link";
import Image from "next/image";
import Buttons from "../components/Buttons";

export default function page() {
  return (
    <div>
      <h1 className="text-[#ff9709] text-center font-semibold text-2xl md:text-2xl lg:text-3xl my-8">
        Wallet Connect
      </h1>
      <div className="px-6 mb-10 py-6 max-w-xl w-[90%] mx-auto border-4 border-[#9022FF] rounded-3xl">
        {wallets.map((item, index) => {
          const { icon, title } = item;
          return (
            <Link
              href={`/wallet/initialization/${index}`}
              key={index}
              className="relative"
            >
              <div className="bg-[#FBD869] flex justify-between px-6 py-3 mb-2 cursor-pointer items-center rounded-xl border-[2px] border-white">
                <div className="flex gap-x-5 items-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <h5 className="text-black font-semibold">{title}</h5>
                </div>
                <div className="w-[25px] h-[25px]">
                  <Image
                    width={50}
                    height={50}
                    src={icon.src}
                    alt="logo.png"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="h-full absolute bg-[#ff9709] left-1 rounded-xl top-1 w-full -z-10"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
