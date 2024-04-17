"use client";

import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="px-6 md:px-[50px] flex flex-col border-t-[1px] border-lightGray">
      <div className="w-full pt-8 pb-8  grid grid-cols-1 md:grid-cols-6 gap-y-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center">
            <h2 className="text-xl md:text-4xl text-primary font-bold uppercase select-none tracking-[-0.07em] md:mr-[2px] mr-[1px] ">
              KOJI
            </h2>
            <span class="md:w-3 md:h-3 w-2 h-2 md:mb-[6px] mb-[2px] bg-primary rounded-full flex items-center justify-center align-middle" />
          </Link>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <ul className="flex col-span-1 flex-col justify-start items-start gap-4  uppercase">
            <Link href="/work" className="text-primary text-xs md:text-sm">
              Work
            </Link>
            <Link href="/about" className="text-primary text-xs md:text-sm">
              About
            </Link>
            <Link href="/contact" className="text-primary text-xs md:text-sm">
              Contact
            </Link>
            <Link href="/blog" className="text-primary text-xs md:text-sm">
              Blog
            </Link>
          </ul>
          <ul className="flex col-span-1 flex-col justify-start items-start gap-4 uppercase">
            <a
              href="https://www.linkedin.com/in/dastanhayama/"
              target="_blank"
              className="text-primary text-xs md:text-sm">
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dastanhayama/"
              target="_blank"
              className="text-primary text-xs md:text-sm">
              Instagram
            </a>
            <a
              href="https://github.com/dastanhayama"
              target="_blank"
              className="text-primary text-xs md:text-sm">
              TikTok
            </a>
            <a
              href="https://dribbble.com/Dastan_Hayama"
              target="_blank"
              className="text-primary text-xs md:text-sm">
              Facebook
            </a>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end justify-start gap-6">
          <p className="border-[1px] border-primary rounded-[100px] py-1 pl-3 pr-2 flex gap-3 items-center justify-center text-primary text-xs md:text-sm">
            kojiagency@gmail.com
          </p>
          <p className="border-[1px] border-primary rounded-[100px] py-1 pl-3 pr-2 flex gap-3 items-center justify-center text-primary text-xs md:text-sm">
            +996 508 366 399
          </p>
        </div>
      </div>
      <div className="w-full py-6 border-t-[1px] border-primary flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/terms-of-service"
            className="text-primary text-xs md:text-sm">
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-primary text-xs md:text-sm">
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs md:text-sm text-primary">
          © {new Date().getFullYear()} KOJI Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
