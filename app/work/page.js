import ProjectCard from "@components/ProjectCard";
import CTA from "@components/CTA";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Our Work: Showcasing Remarkable Projects",
    description:
      "Welcome to Our Works Page, where we proudly present a collection of remarkable digital marketing campaigns and projects. As a passionate team of digital marketers, we pour our creativity and expertise into every project we undertake. Explore a diverse range of campaigns, each carefully crafted to deliver exceptional results and captivating engagement. From targeted strategies to compelling content, these projects exemplify the fusion of data-driven insights and creative execution. Immerse yourself in the showcase and witness the transformative power of digital marketing. Be inspired and discover the possibilities for your own digital ventures.",
  };
}

export default async function page() {
  const { data } = await fetch(process.env.NEXT_PUBLIC_GRAPHMCMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        projectsConnection {
          edges {
            node {
              createdAt
              slug
              title
              workCategories {
                name
                slug
              }
              featuredImage {
                url
              }
            }
          }
        }
      }
      `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());
  const projects = data.projectsConnection.edges;
  return (
    <div className="flex flex-col  pt-[15vh] lg:pt-[20vh] pb-12 w-full">
      {/* <div className="flex flex-col justify-center md:items-center items-start gap-8 w-full pb-32 px-6 md:px-[50px]"> */}
      {/* <h1
          className={`font-medium md:text-5xl text-3xl text-primary uppercase`}>
          Our work
        </h1> */}
      {/* <div className="flex w-full justify-start items-start">
          <div className="lg:basis-1/3 basis-full flex flex-col gap-4"> */}
      {/* <p className=" text-md md:text-lg font-medium text-primary">
          It's all here: from vibrant digital solutions to compelling marketing
          websites and innovative digital offerings. Take a look.
        </p> */}
      {/* <div className="flex gap-2 lg:gap-2 md:gap-5 items-center w-full">
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
              <Link href="/about" className="md:w-auto w-1/2">
                <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
                  <span className="text-xs md:text-sm text-primary uppercase">
                    about us
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
            </div> */}
      {/* </div>
        </div> */}
      {/* </div> */}
      {projects.length === 0 ? (
        <div className="flex flex-col justify-center md:items-center items-start gap-8 w-full pb-32 px-6 md:px-[50px]">
          <h1
            className={`font-medium md:text-5xl text-3xl text-primary uppercase`}>
            Coming soon
          </h1>

          <p className=" text-md md:text-lg font-medium text-primary">
            Stay tuned for our exciting projects! Or become our client and get
            started on your project today.
          </p>
          <Link href="/about" className="md:w-auto w-1/2">
            <button className="bg-primary rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
              <span className="text-xs md:text-sm text-white uppercase">
                About us
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
      ) : (
        <ul className="h-auto bg-lightGray px-6 md:px-[50px] grid grid-cols-1 md:grid-cols-2 items-center pt-[50px] pb-24 gap-x-8 gap-y-16">
          {projects
            .map((project) => (
              <ProjectCard project={project.node} key={project.node.slug} />
            ))
            .reverse()}
        </ul>
      )}
      <CTA />
    </div>
  );
}
