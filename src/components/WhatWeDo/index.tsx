import React from "react";

const WhatWeDo = () => {
  return (
    <section className="w-full flex items-center px-12 py-12 justify-center">
      <div className="w-full flex-col justify-center mx-28 p-4 h-full">
        <h1 className="text-black-400 text-3xl font-bold">
          What we do at iCOWEB
        </h1>
        <p>
          We build useable and scalable products from our customer’s imagination
          and {"\n"} ensure it meets the business and user goal and as well
          ensure every design{"\n"} process is followed.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <p className=" bg-gray-100 text-xs font-bold px-2 py-4">
          {"Brand & Identity Design"}
        </p>
        <p className=" bg-gray-100 text-xs font-bold">User Experience</p>
        <p className=" bg-gray-100 text-xs font-bold">User Interface</p>
        <p className=" bg-gray-100 text-xs font-bold">
          Software/App Development
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
