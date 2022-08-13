import React from "react";
import Link from "next/link";

const ProjectsHandled = () => {
  return (
    <section style={{ backgroundColor: "#544BC2" }}>
      <div>
        <h1 className="text-white font-bold text-4xl text-center p-12">
          Projects Handled
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src="/images/ncourage photography 1.png"
            alt=""
            className="object-none object-left-top mx-28"
          />
          <h3 className="text-white font-bold text-center p-2">
            Ncourage Photography
          </h3>
          <p className="text-gray-400 font-bold text-center">Branding</p>
        </div>
        <div>
          <img
            src="/images/miss ola 1.png"
            alt=""
            className="object-none object-right-top mx-28"
          />
          <h3 className="text-white font-bold text-center p-2">
            Miss OLAMMA Africa
          </h3>
          <p className="text-gray-400 font-bold text-center">
            UI/UX {"&"} Web Development
          </p>
        </div>
        <div>
          <img
            src="/images/the emma's.png"
            alt=""
            className="object-none object-left-bottom mx-28"
          />
          <h3 className="text-white font-bold text-center p-2">The EMMAs</h3>
          <p className="text-gray-400 font-bold text-center">Web Development</p>
        </div>
        <div>
          <img
            src="/images/OLOKUN.png"
            alt=""
            className="object-none object-right-bottom mx-28"
          />
          <h3 className="text-white font-bold text-center p-2">Olokun Store</h3>
          <p className="text-gray-400 font-bold text-center">Web Development</p>
        </div>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
          style={{ fill: "white" }}
        >
          <path d="M 5.5 10 C 3.5850452 10 2 11.585045 2 13.5 L 2 22.5 L 2 34.5 C 2 36.414955 3.5850452 38 5.5 38 L 16.5 38 C 21.176657 38 25 34.176657 25 29.5 C 25 26.543503 23.379856 24.055298 21.074219 22.53125 C 22.801509 21.25305 24 19.299926 24 17 C 24 13.151598 20.848402 10 17 10 L 5.5 10 z M 33.511719 12 C 32.683719 12 32.011719 12.672 32.011719 13.5 C 32.011719 14.328 32.683719 15 33.511719 15 L 41.511719 15 C 42.340719 15 43.011719 14.328 43.011719 13.5 C 43.011719 12.672 42.339719 12 41.511719 12 L 33.511719 12 z M 5.5 13 L 17 13 C 19.227598 13 21 14.772402 21 17 C 21 19.227598 19.227598 21 17 21 L 16.5 21 L 5 21 L 5 13.5 C 5 13.204955 5.2049548 13 5.5 13 z M 36.996094 17 C 31.659366 17 27.447365 21.432718 27.119141 26.867188 A 1.50015 1.50015 0 0 0 27.119141 28.136719 C 27.449267 33.56954 31.661439 38 36.996094 38 C 40.48059 38 43.922192 36.22655 45.767578 33.304688 A 1.50015 1.50015 0 1 0 43.232422 31.701172 C 42.029808 33.60531 39.405598 35 36.996094 35 C 33.648827 35 30.947255 32.433758 30.279297 29 L 44.484375 29 C 45.956288 29 47.146993 27.682151 46.974609 26.208984 L 46.974609 26.207031 C 46.371622 21.051926 42.12622 17 36.996094 17 z M 36.996094 20 C 40.351317 20 43.159364 22.565302 43.828125 26 L 30.279297 26 C 30.947042 22.566148 33.647795 20 36.996094 20 z M 5 24 L 16.5 24 C 19.555343 24 22 26.444657 22 29.5 C 22 32.555343 19.555343 35 16.5 35 L 5.5 35 C 5.2049548 35 5 34.795045 5 34.5 L 5 24 z"></path>
        </svg>
        <Link href="/">
          <p className="text-white text-center">Projects on Behance</p>
        </Link>
        <Link href="/">
          <p className="text-white text-center"></p>
        </Link>
        View achieved projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsHandled;
