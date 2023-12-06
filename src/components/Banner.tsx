import React from "react";

const Banner = () => {
  return (
    <div className="h-44 my-5">
      <div className="container border px-0 py-0 rounded-3xl overflow-hidden">
        <img
          src="/img/banner.jpg"
          alt="banner"
          className="object-cover h-72 w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
