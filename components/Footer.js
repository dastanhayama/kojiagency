import React from "react";
import Link from "next/link";

const Links = [
  { id: 2, title: "Work", titleLink: "/work" },
  { id: 3, title: "About", titleLink: "/about" },
  { id: 4, title: "Contact", titleLink: "/contact" },
  { id: 5, title: "Blog", titleLink: "/blog" },
];

const SocialLinks = [
  { id: 1, title: "Instagram", titleLink: "#" },
  { id: 3, title: "LinkedIn", titleLink: "#" },
  { id: 4, title: "Facebook", titleLink: "#" },
  { id: 5, title: "Tiktok", titleLink: "#" },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-[50px] flex flex-col  bg-primary">
      <div className="w-full pt-8 pb-8  grid grid-cols-1 md:grid-cols-6 gap-y-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center">
            <h2 className="text-xl md:text-4xl text-[#f3f5f9] font-bold uppercase select-none tracking-[-0.07em] md:mr-[2px] mr-[1px] ">
              KOJI
            </h2>
            <span className="md:w-3 md:h-3 w-2 h-2 md:mb-[6px] mb-[2px] bg-[#f3f5f9] rounded-full flex items-center justify-center align-middle" />
          </Link>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <ul className="flex col-span-1 flex-col justify-start items-start gap-4  uppercase">
            {Links.map((item) => (
              <Link
                key={item.id}
                href={item.titleLink}
                className="text-[#f3f5f9] text-xs md:text-sm  hover:underline transition duration-400">
                {item.title}
              </Link>
            ))}
          </ul>
          <ul className="flex col-span-1 flex-col justify-start items-start gap-4 uppercase">
            {SocialLinks.map((item) => (
              <a
                key={item.id}
                href={item.titleLink}
                target="_blank"
                className="text-[#f3f5f9] text-xs md:text-sm hover:underline transition duration-400">
                {item.title}
              </a>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end justify-start gap-6">
          <a
            href="mailto: kojiagency@gmail.com"
            className="border-[1px] border-[#f3f5f9] rounded-[100px] py-1 pl-3 pr-2 flex gap-3 items-center justify-center text-[#f3f5f9] text-xs md:text-sm hover:text-primary hover:bg-[#f3f5f9] transition duration-400">
            kojiagency@gmail.com
          </a>
          <a
            href="tel:+996508366399"
            className="border-[1px] border-[#f3f5f9] rounded-[100px] py-1 pl-3 pr-2 flex gap-3 items-center justify-center text-[#f3f5f9] text-xs md:text-sm hover:text-primary hover:bg-[#f3f5f9] transition duration-400">
            +996 508 366 399
          </a>
        </div>
      </div>
      <div className="w-full py-6 border-t-[1px] border-primary flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/terms-of-service"
            className="text-[#f3f5f9] text-xs md:text-sm hover:underline transition duration-400">
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-[#f3f5f9] text-xs md:text-sm hover:underline transition duration-400">
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs md:text-sm text-[#f3f5f9]">
          © {new Date().getFullYear()} KOJI MEDIA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
