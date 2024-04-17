"use client";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { wallets } from "../../utils/wallets";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function page() {
  const { id } = useParams();
  const navigate = useRouter();
  // useEffect(() => {
  //   setTimeout(() => navigate.push(`/wallet/importwallet/${id}`), 3000);
  // }, []);
  return (
    <div className="min-h-[100vh]">
      <div className="max-w-md mx-auto mt-10 w-[90%] bg-[#9022FF] px-6 pt-3 pb-10 rounded-3xl border-4 border-[#9022FF]">
        <div className="flex justify-between items-center mb-8">
          <h5 className="text-white font-bold">Back</h5>
          <AiOutlineClose className="text-[#FF1E1E] text-2xl" />
        </div>
        <div className="px-5 py-8 rounded-2xl mb-5 border border-[#FBD869] text-white flex md:text-lg">
          <p>Initializing</p>
          <Typewriter
            className="inline "
            options={{
              strings: ["...", "..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-11">
          <div className="h-36 bg-[#ff9709] -mb-[10.9rem] ml-3 rounded-xl w-full"></div>
          <div className="px-5 py-8 rounded-2xl border-[3px] cursor-pointer border-[#9022FF] bg-[#FBD869] flex items-center justify-between">
            <div className="flex flex-col gap-y-10 text-white">
              <h3 className="font-bold text-2xl">{wallets[id].title}</h3>
              <h5>Easy-to-Use browser extension</h5>
            </div>
            <div className="w-[30px] h-[30px]">
              <Image
                width={30}
                height={30}
                src={wallets[id].icon}
                alt="logo.png"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
