import ProcessAccordion from "@components/ProcessAccordion";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to KOJI Agency, your partner in digital success! Our About Us page is more than just a glimpse into who we are; it's a window into the passion and expertise driving our digital marketing journey. At KOJI, we specialize in crafting innovative strategies tailored to elevate your brand in the ever-evolving digital landscape.",
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
        {/* <div className="flex w-full justify-start items-start lg:justify-end lg:items-end">
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
        </div> */}
      </div>
      <img
        src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="me"
        className="object-cover w-full h-[50vh] lg:h-screen mb-12 md:mb-24"
      />
      <section className="grid lg:grid-cols-3 grid-cols-1 w-full px-6 md:px-[50px] gap-4 lg:gap-0 mb-12 md:mb-24">
        <div className="flex justify-start items-start w-full col-span-1">
          <p className="text-xs md:text-sm font-base text-primary bg-darklightGray uppercase px-6 py-2 rounded-[100px]">
            A few words about us
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 flex w-full flex-col items-center gap-8">
          <h2
            className={` font-medium md:text-5xl text-3xl text-primary uppercase border-b-[1px] border-darklightGray pb-8`}>
            Empowering Brands to Unleash Their Digital Potential
          </h2>
          <div className="flex w-full flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-xs md:text-sm font-medium text-primary">
              At KOJI Agency, we're more than just another digital marketing
              firm – we're passionate about crafting immersive digital
              experiences that make a lasting impact. As a team of
              forward-thinking digital marketers, we take our work seriously
              while embracing the idea that work should also be enjoyable.
              <br />
              <br />
              We firmly believe that humor and creativity are essential
              ingredients for pushing the boundaries of digital marketing. Our
              mindset allows us to inject personality into every campaign,
              delivering results that stand out in today's competitive
              landscape.
            </p>
            <p className="text-xs md:text-sm font-light text-primary">
              Recognizing that each business is unique, we tailor our approach
              to every project. By delving into your brand's identity and
              understanding your specific goals, we develop customized
              strategies that resonate with your audience and drive meaningful
              engagement.
              <br />
              <br />
              Whether you're a burgeoning startup or an established enterprise,
              we're committed to helping you unlock your full digital potential.
              So, if you're seeking a digital marketing partner who's dedicated
              to your success and knows how to have fun along the way, get in
              touch with us for a free consultation. Let's discuss how we can
              elevate your brand and drive growth in the digital realm!
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
            Driven by <span className="text-darkGray">PURPOSE</span>
          </h2>
          <p className="text-xs md:text-sm font-medium text-primary">
            At KOJI Agency, we approach digital marketing with an artisan's
            touch. Each strategy is meticulously tailored to your brand,
            ensuring it fits seamlessly into your unique identity. Our
            collaboration is akin to a finely-tuned orchestra, where every
            instrument plays its part to achieve harmony. Say goodbye to
            ordinary; let us elevate your brand to extraordinary heights.
          </p>
        </div>
      </section>
      <section className="bg-lightGray py-4 grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-8">
        <div className="col-span-1 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              01<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Creativity
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            We embrace creativity as the cornerstone of our approach, constantly
            pushing boundaries to deliver innovative solutions that captivate
            audiences.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              02<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Authentic Connections
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            We prioritize building genuine connections with our clients and
            their audiences, fostering trust and loyalty through transparent and
            authentic communication.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              03<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Results-Driven Excellence
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            We are relentless in our pursuit of excellence, driven by a passion
            for delivering measurable results that exceed expectations and
            propel our clients towards success.
          </p>
        </div>
      </section>
      <section className="bg-lightGray pt-4 pb-32 grid lg:grid-cols-4 grid-cols-1 w-full px-6 md:px-[50px] gap-8 items-end">
        <div className="col-span-1 lg:col-start-2 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              04<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Continuous Learning
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            We thrive on curiosity and are committed to staying ahead of the
            curve in the dynamic world of digital marketing, constantly learning
            and evolving to meet the ever-changing needs of our clients.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              05<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              Fun and Fearless
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            We believe in infusing joy and enthusiasm into everything we do,
            maintaining a fearless attitude that allows us to tackle challenges
            with creativity, resilience, and a sense of adventure.
          </p>
        </div>
        <div className="col-span-1 h-auto lg:h-[60vh] border-[1px] border-darkGray pt-6 pb-6 lg:pb-24 px-6 flex flex-col justify-start items-start">
          <div className="flex flex-col gap-4 mb-4 lg:mb-16">
            <h3 className="font-medium md:text-5xl text-3xl text-primary uppercase">
              06<span className="text-darkGray">.</span>{" "}
            </h3>
            <h3 className=" text-xl text-darkGray uppercase font-medium">
              ATTENTION TO DETAIL
            </h3>
          </div>
          <p className="text-xs md:text-sm text-primary">
            Consider us your digital detectives, meticulously examining every
            detail to uncover the secrets to your brand's success.
          </p>
        </div>
      </section>
      <ProcessAccordion />
      <div className="h-auto bg-lightGray flex flex-col justify-center items-center gap-6 py-24 px-6 md:px-[50px]">
        <p className="text-md md:text-lg font-base text-white bg-primary capitalize px-6 py-2 rounded-[100px]">
          Get in touch
        </p>
        <h2 className="text-primary font-medium text-3xl md:text-5xl">
          <span className="text-darkGray">HAVE AN IDEA? </span>
          LET'S DO IT TOGETHER!
        </h2>
        {/* <p className="w-full md:w-1/2 text-primary font-base text-md md:text-lg">
          Harness your creativity and surpass your competitors with a
          professional web experience that will set you apart.
        </p> */}
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
