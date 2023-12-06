import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
  return (
    <div className="py-5">
      <div className="container flex justify-between items-center">
        <h3 className="font-bold text-2xl text-gray-700">Products</h3>
        <div className="space-x-7 flex items-center justify-between">
          <HeartIcon className="h-5" />
          <span className="bg-black text-white text-sm rounded-full px-2.5 py-1">
            0
          </span>
          <span className="uppercase">ng</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
