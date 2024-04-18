"use client";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence, easeIn } from "framer-motion";
const data = [
  {
    id: 1,
    title: "Discovery and strategy",
    content:
      "In this initial phase, our team dives deep into understanding your business objectives, target audience, and competitive landscape. We formulate a comprehensive digital marketing strategy tailored to your specific needs, encompassing channels, tactics, and key performance indicators (KPIs) to guide our efforts.",
  },
  {
    id: 2,
    title: "Planning and Creation",
    content:
      "With the strategy in place, we proceed to develop detailed campaign plans for each digital channel identified. This includes content creation, ad copywriting, graphic design, and other creative elements necessary to execute the strategy effectively. We ensure alignment with your brand identity and messaging throughout the process.",
  },
  {
    id: 3,
    title: "Implementation and Execution",
    content:
      "Once the campaign plans are finalized, we move into the execution phase, where we implement all elements across various digital platforms. This may involve launching ads, publishing content, optimizing website performance, and managing social media accounts. Our team closely monitors campaign performance in real-time, making adjustments as needed to maximize results.",
  },
  {
    id: 4,
    title: "Monitoring and Analysis",
    content:
      "Throughout the campaign duration, we continuously monitor key metrics and performance indicators to gauge the effectiveness of our efforts. We utilize advanced analytics tools to track website traffic, engagement rates, conversion rates, and other relevant data points. This ongoing analysis allows us to identify trends, uncover insights, and make data-driven decisions to optimize campaign performance.",
  },
  {
    id: 5,
    title: "Reporting and Optimization",
    content:
      "At the conclusion of each campaign cycle, we provide comprehensive reports detailing the outcomes and insights gained. We review the successes and challenges encountered, highlighting areas of improvement and opportunities for optimization. Based on these findings, we refine our strategies and tactics for future campaigns, ensuring continuous growth and success for your brand in the digital landscape.",
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
