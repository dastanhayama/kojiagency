"use client";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence, easeIn } from "framer-motion";
const data = [
  {
    id: 1,
    title: "Discovery and strategy",
    content:
      "I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
  },
  {
    id: 2,
    title: "Design and development",
    content:
      "I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
  },
  {
    id: 3,
    title: "Testing and quality assurance",
    content:
      "I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
  },
  {
    id: 4,
    title: "Launch and optimisation",
    content:
      "I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
  },
  {
    id: 5,
    title: "Ongoing support",
    content:
      "I don't just dive headfirst into designing websites. I like to get to know my clients first. I'll ask you all sorts of questions about your business goals, target audience, and what you had for breakfast this morning. Just kidding about the breakfast part, but you get the idea.",
  },
];

function ProcessAccordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <section className="bg-white py-12 h-auto grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-4 lg:gap-0">
      <div className="flex justify-start items-start w-full col-span-1 lg:col-span-2">
        <p className="text-sm font-base text-white bg-primary uppercase px-6 py-2 rounded-[100px]">
          Process
        </p>
      </div>
      <div className="col-span-1 lg:col-span-2 flex w-full flex-col items-start h-auto">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col w-full h-auto">
            <div
              className="flex justify-between items-center w-full border-t-[1px] border-darklightGray py-4"
              onClick={() => toggle(item.id)}>
              <p className="text-sm lg:text-lg font-medium text-primary   w-full">
                {item.title}
              </p>
              <span className="bg-primary text-white rounded-[100px] p-1">
                {selected === item.id ? (
                  <AiOutlineMinus size={15} />
                ) : (
                  <AiOutlinePlus size={15} />
                )}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {selected === item.id && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto" },
                    collapsed: { height: 0 },
                  }}
                  transition={{ ease: [0.04, 0.62, 0.23, 0.98], duration: 0.2 }}
                  className="w-full text-primary font-light text-sm overflow-clip h-auto">
                  <p className="py-4">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessAccordion;
