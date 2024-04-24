"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    pages: "",
    service: "",
  });
  const [messages, setMessages] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { name, email, message, pages, service } = formData;
  const form = useRef();
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      name.trim().length <= 0 ||
      email.trim().length <= 0 ||
      message.trim().length <= 0
      // pages.length <= 0 ||
      // service.length <= 0
    ) {
      setMessages("All fields are required!");
    } else {
      emailjs
        .sendForm(
          "service_ga8ms7d",
          "template_4t59yc8",
          form.current,
          "ePpHov8hEyTcg4o79"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMessage("Your message has been sent!");
            evt.target.reset();
            setFormData({
              ...formData,
              name: "",
              email: "",
              message: "",
              // pages: "",
              // service: "",
            });
          },
          (error) => {
            console.log(error.text);
            setMessages("Something went wrong. Please try again.");
          }
        );
    }

    setTimeout(() => {
      setMessages("");
      setSuccessMessage("");
    }, 5000);

    // console.log(formData);
  };
  return (
    <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 pt-[10vh] lg:pt-[15vh]">
      <div className="lg:h-[100vh] h-auto bg-[#f3f5f9] w-full relative top-0 left-0 col-span-1 flex flex-col justify-start items-start px-6 md:px-[50px] py-[50px] gap-4 md:gap-8">
        <h1 className="font-medium text-3xl md:text-5xl uppercase text-primary">
          Let's team up to make your online vision a reality!
        </h1>
        <p className="text-sm md:text-base text-primary">
          Searching for a specialist to enhance your online strategy? Contact us
          today to explore how we can elevate your brand. Let's unlock your
          digital potential together.
        </p>
        <ul className="flex flex-col justify-start items-start gap-4">
          <li className="flex gap-4 justify-center items-center">
            <span className="w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-primary text-white">
              <CiMail size={25} />
            </span>
            <p className="text-primary text-xs md:text-sm">
              kojiagency@gmail.com
            </p>
          </li>
          <li className="flex gap-4 justify-center items-center">
            <span className="w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-primary text-white">
              <CiPhone size={25} />
            </span>
            <p className="text-primary text-xs md:text-sm">+996 508 366 399</p>
          </li>
          <li className="flex gap-4 justify-center items-center">
            <span className="w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-primary text-white">
              <CiLocationOn size={25} />
            </span>
            <p className="text-primary text-xs md:text-sm">
              Bishkek, Kyrgyzstan
            </p>
          </li>
        </ul>
      </div>
      <div className="lg:h-full h-auto w-full col-span-1">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="px-6 md:px-[50px] py-[50px] flex flex-col justify-start items-center md:items-start gap-8 w-full">
          {/* <div className="flex flex-col justify-start items-center md:items-start gap-4 w-full">
            <p className="uppercase text-primary text-md text-center md:text-left">
              How can I help? <span className="text-red-400">*</span>
            </p> */}
          {/* <div className="flex flex-col md:flex-row items-center gap-0 md:gap-2 w-full">
              <input
                type="radio"
                id="SMM"
                name="service"
                value="SMM"
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor="SMM"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                Social Media Marketing
              </label>
              <input
                type="radio"
                id="target"
                name="service"
                value="target"
                onChange={handleChange}
                className="hidden"
              />
               {" "}
              <label
                htmlFor="target"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                Facebook Advertising
              </label>
              <input
                type="radio"
                id="Paid Ads"
                name="service"
                value="design & development"
                onChange={handleChange}
                className="hidden"
              />
               
              <label
                htmlFor="Paid Ads"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                Paid Ads
              </label>
            </div> */}
          {/* </div> */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4 w-full">
            <p className="uppercase text-primary text-md text-center md:text-left">
              Your details<span className="text-red-400">*</span>
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full md:gap-8 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                className="basis-1/2 text-center md:text-left outline-none font-light text-sm border-b-[1px] border-darklightGray bg-[#f3f5f9] py-2 w-full "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className="basis-1/2 text-center md:text-left outline-none font-light text-sm border-b-[1px] border-darklightGray bg-[#f3f5f9] py-2 w-full "
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-4 w-full">
            <p className="uppercase text-primary text-md text-center md:text-left">
              Please Tell Us Your Goals<span className="text-red-400">*</span>
            </p>
            <textarea
              type="text"
              name="message"
              placeholder="Your message..."
              value={message}
              onChange={handleChange}
              className=" outline-none text-center md:text-left font-light text-sm border-b-[1px] border-darklightGray bg-[#f3f5f9] py-2 w-full "
            />
          </div>
          {/* <div className="flex flex-col justify-start items-center md:items-start gap-4 w-full">
            <p className="uppercase text-primary text-md text-center md:text-left">
              APROX. HOW MANY PAGES? <span className="text-red-400">*</span>
            </p> */}
          {/* <div className="flex flex-col md:flex-row items-center gap-0 md:gap-2 w-full">
              <input
                type="radio"
                id="1-3"
                name="pages"
                value="1-3"
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor="1-3"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                1-3
              </label>
              <input
                type="radio"
                id="3-6"
                name="pages"
                value="3-6"
                onChange={handleChange}
                className="hidden"
              />
               {" "}
              <label
                htmlFor="3-6"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                3-6
              </label>
              <input
                type="radio"
                id="6-10"
                name="pages"
                value="6-10"
                onChange={handleChange}
                className="hidden"
              />
               
              <label
                htmlFor="6-10"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                6-10
              </label>
              <input
                type="radio"
                id="10+"
                name="pages"
                value="10+"
                onChange={handleChange}
                className="hidden"
              />
               
              <label
                htmlFor="10+"
                className="text-sm text-primary font-light w-full md:w-auto flex justify-center items-center">
                10+
              </label>
            </div> */}
          {/* </div> */}
          {successMessage ? (
            <p className="text-primary text-sm uppercase font-semibold">
              {successMessage}
            </p>
          ) : (
            <input
              type="submit"
              value="Send"
              className="px-8 py-2 bg-primary text-sm text-white font-base rounded-[100px] cursor-pointer w-full md:w-auto disabled:bg-darkGray"
            />
          )}

          <p className="text-primary text-sm uppercase font-semibold">
            {messages}
          </p>
        </form>
      </div>
    </div>
  );
}
