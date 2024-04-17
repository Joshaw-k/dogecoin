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
            <Link href={`/wallet/initialization/${index}`} key={index}>
              <div className="mb-8">
                <div className="h-12 bg-[#ff9709] -mb-[3.7rem] ml-1.5 rounded-xl w-full"></div>
                <div className="bg-[#FBD869] flex justify-between px-6 py-3 cursor-pointer items-center rounded-xl border-[2px] border-white z-50">
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
