import React from "react";

const Firstsection = () => {
  return (
    <div className="w-full flex items-center px-12 py-12 justify-center">
      <div className="w-full flex-col justify-center mx-28 p-4 h-full">
        <h1 className="font-small text-4xl leading-relaxed text-purple-700 ">
          Bring your amazing ideas to the market with{" "}
          <span className="font-bold">iCOWEB</span>
        </h1>
        <p>We've comfortably turned businesses ideas to reality</p>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out my-8"
        >
          Start a Project
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative w-fit h-700 flex justify-center ">
          <img src="/images/Group 90.png" alt="image" className="h-700" />
          <button className=" absolute bottom-17 bg-black text-white ">
            hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
