import Link from "next/link";
import React from "react";

const Buttons = ({ text }) => {
  return (
    <Link className="relative w-full cursor-pointer" href="/wallet">
      <div className="h-8 bg-[#ff9709] -mb-11 ml-1 left-1 rounded-lg top-1 w-full"></div>
      <div className="rounded-lg bg-[#FBD869] font-semibold px-8 py-1.5 border-[2px] border-white z-50">
        {text}
      </div>
    </Link>
  );
};

export default Buttons;
