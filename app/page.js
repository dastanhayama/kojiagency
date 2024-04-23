import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 min-h-[70vh] lg:min-h-[100vh] px-6 md:px-[50px] pt-32 md:pt-48 pb-8 ">
      <h1
        className={`font-medium text-3xl md:text-7xl text-primary md:text-center`}>
        WE ARE <span className="text-darkGray">KOJI MEDIA.</span> <br />
        <span>YOUR DIGITAL GROWTH PARTNERS.</span>
      </h1>
      <div className="w-full flex flex-col gap-2 lg:gap-0 justify-between items-center">
        {/* <div className="basis-1/3 md:basis-1/2 lg:basis-1/3">
          <h5 className="font-medium text-xs md:text-sm md:uppercase text-primary">
            Designing and developing a scalable website for your business.
          </h5>
        </div> */}
        <div className="flex flex-col md:items-center items-start gap-8 lg:gap-4 md:w-2/3 w-full">
          <h5 className="text-md md:text-xl text-primary md:text-center">
            Elevate Your Brand with Us: Customized Digital Marketing Solutions
            for Optimal Online Performance and Success.
          </h5>
          {/* <div className="flex gap-2 md:gap-5 md:items-center items-start"> */}
          <Link href="/contact" className="w-auto">
            <button className="bg-primary rounded-[100px] py-2 pl-4 pr-2 flex gap-2 items-center justify-center md:justify-start md:w-auto w-full">
              <span className="text-sm md:text-lg text-white uppercase">
                CONTACT US
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
          {/* <Link href="/about" className="md:w-auto w-1/2">
              <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                <span className="text-xs md:text-sm text-primary uppercase">
                  about
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
            </Link> */}
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}
