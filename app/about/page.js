import ProcessAccordion from "@components/ProcessAccordion";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "About me",
    description:
      "I'm Dastan Hayama, a dedicated web developer and designer. With a strong passion for creating exceptional online experiences, I combine my technical expertise and artistic vision to bring your digital vision to life. Collaborate with me to craft visually stunning websites that engage and inspire. Let's work together to create something truly remarkable.",
  };
}

export default function page() {
  return (
    <div className="flex flex-col  pt-[15vh] lg:pt-[20vh] w-full">
      <div className="flex flex-col justify-start items-start gap-8 w-full pb-32 px-6 md:px-[50px]">
        <h1
          className={`font-medium md:text-5xl text-3xl text-primary uppercase`}>
          <span className="text-darkGray">Expertise</span>,{" "}
          <span className="text-darkGray">individuality</span>, and{" "}
          <span className="text-darkGray">passion</span> drive our exceptional
          results.
        </h1>
        <div className="flex w-full justify-start items-start lg:justify-end lg:items-end">
          <div className="lg:basis-1/3 basis-full flex flex-col gap-4">
            <p className=" text-xs md:text-sm font-medium text-primary">
              In my world, creativity merges with strategy, where stunning
              design harmonizes with functionality. I possess a deep passion for
              creating digital experiences that capture your brand essence and
              fuel business growth.
            </p>
            <div className="flex gap-2 lg:gap-2 md:gap-5 items-center w-full">
              <Link href="/contact" className="md:w-auto w-1/2">
                <button className="bg-primary rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                  <span className="text-xs md:text-sm text-white uppercase">
                    Contact
                  </span>
                  <span className="rounded-full p-1 bg-white text-primary">
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
                        fill="#1D1F21"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/work" className="md:w-auto w-1/2">
                <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                  <span className="text-xs md:text-sm text-primary uppercase">
                    works
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
          </div>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="me"
        className="object-cover w-full h-[50vh] lg:h-screen mb-12 md:mb-24"
      />
      <section className="grid lg:grid-cols-3 grid-cols-1 w-full px-6 md:px-[50px] gap-4 lg:gap-0 mb-12 md:mb-24">
        <div className="flex justify-start items-start w-full col-span-1">
          <p className="text-xs md:text-sm font-base text-primary bg-darklightGray uppercase px-6 py-2 rounded-[100px]">
            A few words about me
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 flex w-full flex-col items-center gap-8">
          <h2
            className={` font-medium md:text-5xl text-3xl text-primary uppercase border-b-[1px] border-darklightGray pb-8`}>
            A FREELANCE DIGITAL developer and designer DEDICATED TO EMPOWERING
            FORWARD-THINKING COMPANIES TO UNLOCK THEIR GROWTH POTENTIAL.
          </h2>
          <div className="flex w-full flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-xs md:text-sm font-medium text-primary">
              I am not just about creating visually stunning websites – I am
              about creating digital experiences that leaves a lasting first
              impression. I am a young digital designer who takes work
              seriously, but I also believe that work should be fun. That's why
              I inject a little bit of humor into every project I do.
              <br />
              <br />I believe that laughter and creativity go hand-in-hand, and
              that mindset helps me push boundaries and deliver truly
              exceptional designs. I also believe that no two businesses are
              alike, and therefore, no two websites should look too similar to
              each other.
            </p>
            <p className="text-xs md:text-sm font-light text-primary">
              That's why I take a customised approach to every project I work
              on. I get to know your brand's personality and your business's
              unique needs before crafting a design that perfectly fits your
              vision. Whether you're a small startup or an established business,
              I'll create a website that captures the essence of your brand and
              helps you stand out in the crowded digital landscape.
              <br />
              <br />
              So, if you're looking for a web designer who takes your business
              seriously, but also having fun, I am that person. Book a free
              strategy call and let's talk about you business!
            </p>
          </div>
          <div className="flex gap-2 lg:gap-2 md:gap-5 items-center w-full">
            <Link href="/work" className="md:w-auto w-1/2">
              <button className="bg-primary rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                <span className="text-xs md:text-sm text-white uppercase">
                  works
                </span>
                <span className="rounded-full p-1 bg-white text-primary">
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
                      fill="#1D1F21"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/blog" className="md:w-auto w-1/2">
              <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                <span className="text-xs md:text-sm text-primary uppercase">
                  blog
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
        </div>
      </section>
      <section className="grid lg:grid-cols-3 grid-cols-1 w-full px-6 md:px-[50px] gap-4 lg:gap-8 mb-12 md:mb-24">
        <img
          src="https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="metoo"
          className="object-cover w-full h-[50vh] lg:h-[80vh] col-span-1 lg:col-span-2"
        />
        <img
          src="https://images.pexels.com/photos/3389528/pexels-photo-3389528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="metoo2"
          className="object-cover w-full h-[50vh] lg:h-[80vh] col-span-1"
        />
      </section>
      <section className="bg-lightGray py-12 grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-4 lg:gap-0">
        <div className="flex justify-start items-start w-full col-span-1 lg:col-span-2">
          <p className="text-xs md:text-sm font-base text-primary bg-darklightGray uppercase px-6 py-2 rounded-[100px]">
            Values
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 flex w-full flex-col items-start gap-8">
          <h2
            className={` font-medium md:text-5xl text-3xl text-primary uppercase`}>
            DESIGNING WITH <span className="text-darkGray">PURPOSE</span>
          </h2>
          <p className="text-xs md:text-sm font-medium text-primary">
            As a freelancer with a passion for web design, I have to tell you
            that I approach every project like a superhero with unique powers
            and strengths. I custom-fit every website like a tailor-made suit,
            delivering on time without sacrificing quality - I am more like The
            Flash than Superman. I collaborate closely with my clients to
            achieve shared goals, like Batman and Robin. So why settle for a
            plain website when you can have one that's super? Get in touch and
            let me use my magic on you.
          </p>
        </div>
      </section>
      <section className="bg-lightGray py-4 grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-8">
        <div className="col-span-1 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              01<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Creativity
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            Creativity is not just a value to me, it's a superpower that I use
            to help your brand stand out in a sea of competitors. I believe that
            a visually stunning and distinctive website design is like a
            powerful spell that leaves a lasting impression on your audience,
            making them fall under your brand's spell.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              02<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              ATTENTION TO DETAIL
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            I am like detective here, always paying attention to even the
            tiniest details. I know that these little clues can add up to a big
            impact on your website's overall look and feel. My mission is to
            craft visually harmonious and engaging designs that will have your
            audience feeling like they've just stumbled upon a work of art.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              03<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              flexibility
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            I am all about the custom-fit. I know that each client is like a
            fingerprint - unique and one of a kind. That's why I am dedicated to
            working closely with you to create a website that not only meets
            your goals but also delivers a seamless user experience. I believe
            that your website should fit you like a glove, not a
            one-size-fits-all approach.
          </p>
        </div>
      </section>
      <section className="bg-lightGray pt-4 pb-32 grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-8 items-end">
        <div className="col-span-1 lg:col-start-2 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              04<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              always on time
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            I am like a clockmaker, ticking and tocking to the beat of the
            project timeline. I know that timely delivery is crucial to project
            success, and that's why I make it a priority to deliver on time and
            within budget. I make sure to keep the quality and attention to
            detail of your project ticking like a Swiss watch, ensuring a
            stunning end result.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              05<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              quality assurance
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            I am like your website's personal trainer, getting it into its best
            shape. I know that quality assurance is a crucial component of any
            design process, which is why I put every aspect of your website
            through its paces. From button clicks to page loads, I make sure
            your website is functioning optimally and delivering the best
            possible user experience.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[80vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              06<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              collaboration
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            I am like a superhero, with my clients as my trusty sidekicks. I
            know that collaboration is the key to any successful project, which
            is why I work closely with you to develop a shared vision and goals.
            I am all about frequent check-ins and feedback. With your powers and
            mine combined, we'll create the best possible results for your
            business.
          </p>
        </div>
      </section>
      <ProcessAccordion />
      <div className="h-auto bg-lightGray flex flex-col justify-start items-start gap-6 py-24 px-6 md:px-[50px]">
        <p className="text-md md:text-lg font-base text-white bg-primary capitalize px-6 py-2 rounded-[100px]">
          Get in touch
        </p>
        <h2 className="text-primary font-medium text-3xl md:text-5xl">
          <span className="text-darkGray">HAVE AN IDEA? </span>
          LET'S DO IT TOGETHER!
        </h2>
        <p className="w-full md:w-1/2 text-primary font-base text-md md:text-lg">
          Harness your creativity and surpass your competitors with a
          professional web experience that will set you apart.
        </p>
        <Link href="/contact" className="md:w-auto w-1/2">
          <button className="bg-primary rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
            <span className="text-md md:text-lg text-white capitalize">
              Contact
            </span>
            <span className="rounded-full p-1 bg-white text-primary">
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
                  fill="#1D1F21"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
