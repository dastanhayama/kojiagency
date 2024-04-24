"use client";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  // { id: 1, title: "Home", titleLink: "/" },
  { id: 2, title: "Work", titleLink: "work" },
  { id: 3, title: "About", titleLink: "about" },
  { id: 4, title: "Contact", titleLink: "contact" },
  { id: 5, title: "Blog", titleLink: "blog" },
];

const SocialLinks = [
  { id: 1, title: "Instagram", titleLink: "#" },
  { id: 3, title: "LinkedIn", titleLink: "#" },
  { id: 4, title: "Facebook", titleLink: "#" },
  { id: 5, title: "Tiktok", titleLink: "#" },
];

const Navigation = ({ toggleClass, setToggleClass }) => {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
      exit={{ opacity: 0 }}
      onClick={() => setToggleClass(false)}
      className="flex fixed top-0 left-0 pt-[10vh] lg:pt-[15vh] bg-primary/20 justify-center w-full h-[100vh] items-start z-[1] backdrop-blur-sm">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0px" }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        className="h-auto md:h-[60vh] w-full bg-[#f3f5f9] flex flex-col gap-8 pb-4">
        <motion.ul
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
          className="bg-[#f3f5f9] basis-4/5 grid md:grid-cols-4 grid-cols-1 gap-0  mx-3 md:mx-[30px] border-[1px] border-darklightGray rounded-lg">
          {Links.map((item) => {
            const isActive = pathname.slice(1).startsWith(item.titleLink);
            return (
              <Link
                key={item.id}
                href={`/${item.titleLink}`}
                className={
                  isActive
                    ? "md:border-b-[0] border-b-[1px] md:border-r-[1px] border-darklightGray col-span-1 flex flex-col justify-end py-4 md:py-6 px-3 md:px-[20px] bg-primary text-[#f3f5f9] "
                    : "md:border-b-[0] border-b-[1px] md:border-r-[1px] border-darklightGray col-span-1 flex flex-col justify-end py-4 md:py-6 px-3 md:px-[20px] text-primary hover:bg-primary hover:text-[#f3f5f9] transition duration-400"
                }>
                <li>
                  <div className="w-full flex justify-between items-center">
                    <p className="text-md md:text-xl font-medium uppercase">
                      {item.title}
                    </p>
                    <RxArrowTopRight size={20} className="font-primary" />
                  </div>
                </li>
              </Link>
            );
          })}
        </motion.ul>
        {/* <div className=" basis-1/5 grid md:grid-cols-4 grid-cols-1 gap-0  mx-3 md:mx-[30px] border-[1px] border-darklightGray rounded-lg"> */}
        {/* <motion.div
            initial={{ opacity: 0, y: "20px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
            className="col-span-1 md:col-span-3 md:border-b-[0] border-b-[1px] md:border-r-[1px] border-darklightGray py-4 md:py-6 px-3 md:px-[20px] text-primary hover:bg-primary hover:text-[#f3f5f9] transition duration-200">
            <a
              href="https://github.com/dastanhayama"
              target="_blank"
              initial={{ opacity: 0, y: "20px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
              className="w-full flex justify-between items-center h-full">
              <p className="text-sm md:text-lg font-medium uppercase">
                Instagram
              </p>

              <RxArrowTopRight size={20} className="font-primary" />
            </a>
          </motion.div> */}
        <motion.ul
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
          className="basis-1/5 grid grid-cols-4  gap-0  mx-3 md:mx-[30px] border-[1px] border-darklightGray rounded-lg">
          {SocialLinks.map((item) => (
            <a
              key={item.id}
              href={item.titleLink}
              target="_blank"
              className="col-span-1 flex justify-center items-center border-r-[1px] py-4 md:py-6 text-primary hover:bg-primary hover:text-[#f3f5f9] transition duration-400">
              <p className="text-xs md:text-lg font-medium uppercase ">
                {item.title}
              </p>
            </a>
          ))}
        </motion.ul>
        {/* </div> */}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
