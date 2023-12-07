import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-gray-300 py-10">
      <div className="container">
        <div className="space-y-4 text-center sm:flex justify-between items-center">
          <div>&copy; 2023 December</div>
          <div>
            Developed by{" "}
            <Link
              className="text-lime-200 font-semibold"
              href="https://www.princenweke.com"
            >
              Prince Nweke A.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
