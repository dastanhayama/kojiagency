import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="h-auto bg-primary flex flex-col justify-center items-center gap-6 py-24 px-6 md:px-[50px]">
      <p className="text-md md:text-lg font-base text-primary bg-white capitalize px-6 py-2 rounded-[100px]">
        Get in touch
      </p>
      <h2 className="text-white font-medium text-3xl md:text-5xl text-center">
        <span className="text-darkGray">HAVE AN IDEA? </span>
        LET'S DO IT TOGETHER!
      </h2>
      {/* <p className="w-full md:w-1/2 text-white font-base text-md md:text-lg">
          Harness your creativity and surpass your competitors with a
          professional web experience that will set you apart.
        </p> */}
      <Link href="/contact" className="md:w-auto w-1/2">
        <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
          <span className="text-md md:text-lg text-primary capitalize">
            contact
          </span>
          <span className="rounded-full p-1 bg-primary text-white">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.95535 2.20537C6.11807 2.04265 6.38189 2.04265 6.54461 2.20537L9.04461 4.70537C9.20733 4.86809 9.20733 5.13191 9.04461 5.29463L6.54461 7.79463C6.38189 7.95735 6.11807 7.95735 5.95535 7.79463C5.79263 7.63191 5.79263 7.36809 5.95535 7.20537L7.74406 5.41667H1.24998C1.01986 5.41667 0.833313 5.23012 0.833313 5C0.833313 4.76988 1.01986 4.58333 1.24998 4.58333H7.74406L5.95535 2.79463C5.79263 2.63191 5.79263 2.36809 5.95535 2.20537Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CTA;
