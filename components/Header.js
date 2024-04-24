"use client";

import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const Header = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (!toggleClass) {
      if (scrollY.current < scrollY.prev) {
        setHidden(false);
      } else if (scrollY.current > 70 && scrollY.current > scrollY.prev) {
        setHidden(true);
      }
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { y: "0" },
    hidden: { y: "-100%" },
  };

  return (
    <Fragment>
      <motion.header
        initial={{ y: "-100%" }}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="fixed top-0 left-0 w-full h-[10vh] lg:h-[15vh] flex justify-between items-center px-6 md:px-[50px] bg-[#f3f5f9] z-[2]">
        <Link
          href="/"
          className="flex items-center h-full"
          onClick={() => setToggleClass(false)}>
          <h2 className="text-xl md:text-4xl text-primary font-bold uppercase select-none tracking-[-0.07em] md:mr-[2px] mr-[1px] ">
            KOJI
          </h2>
          <span className="md:w-3 md:h-3 w-2 h-2 md:mb-[6px] mb-[2px] bg-primary rounded-full flex items-center justify-center align-middle" />
        </Link>
        <button
          className={toggleClass ? "nav-btn active" : "nav-btn"}
          onClick={() => setToggleClass((prev) => !prev)}>
          <span className={toggleClass ? "active" : ""}></span>
          <span className={toggleClass ? "active" : ""}></span>
        </button>
      </motion.header>
      <AnimatePresence>
        {toggleClass && (
          <Navigation
            toggleClass={toggleClass}
            setToggleClass={setToggleClass}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Header;
