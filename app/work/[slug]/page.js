import React from "react";
import moment from "moment";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { data } = await fetch(process.env.NEXT_PUBLIC_GRAPHMCMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query GetProjectDetails($slug: String!) {
        project(where: { slug: $slug }) { 
          createdAt
          slug
          title
          description
          bannerImage {
            url
          }
          featuredImage {
            url
          }
          workCategories {
            name
            slug
          }
          content {
            raw
          }
        }
      }
    `,
      variables: {
        slug: slug,
      },
    }),

    next: { revalidate: 10 },
  }).then((res) => res.json());
  const project = data.project;
  return {
    title: `${project.title} - project done by KOJI Agency.`,
    description: `${project.description} `,
  };
}

export default async function page({ params }) {
  const { slug } = params;
  const { data } = await fetch(process.env.NEXT_PUBLIC_GRAPHMCMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query GetProjectDetails($slug: String!) {
        project(where: { slug: $slug }) { 
          createdAt
          slug
          title
          description
          bannerImage {
            url
          }
          featuredImage {
            url
          }
          workCategories {
            name
            slug
          }
          content {
            raw
          }
        }
      }
    `,
      variables: {
        slug: slug,
      },
    }),

    next: { revalidate: 10 },
  }).then((res) => res.json());
  const project = data.project;

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-md uppercase font-medium mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-4 text-xs md:text-sm">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="flex flex-col  pt-[15vh] lg:pt-[28vh] pb-12 w-full gap-12 lg:gap-24">
      <section className="grid grid-cols-1 lg:grid-cols-3 px-6 md:px-[50px] gap-y-4">
        <div className="col-span-1 w-full lg:flex flex-col items-start justify-end hidden">
          <p className="text-primary text-xs md:text-sm font-light uppercase">
            {moment(project.createdAt).format("MMMM, YYYY")}
          </p>
        </div>
        <div className="cols-span-1 lg:col-span-2 lg:col-start-2 w-full flex flex-col gap-4 ">
          <p className="text-primary text-xs md:text-sm font-light flex lg:hidden uppercase">
            {moment(project.createdAt).format("MMMM, YYYY")}
          </p>
          <h1 className="font-medium uppercase md:text-5xl text-3xl text-primary">
            {project.title}
          </h1>
          <p className="font-base text-primary text-xs md:text-sm w-full lg:w-4/5 uppercase">
            {project.description}
          </p>
          <ul className="flex gap-2 md:gap-4">
            {project.workCategories.map((category) => (
              <li
                key={category.slug}
                className="text-xs md:text-sm text-primary uppercase ">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <img
        src={project.bannerImage.url}
        alt="me"
        className="object-cover w-full h-[50vh] lg:h-[85vh]"
      />
      <section className="grid grid-cols-1 lg:grid-cols-3 px-6 md:px-[50px] gap-y-4">
        <div className="cols-span-1 w-full flex flex-col">
          <p className="font-medium text-md uppercase">What is it?</p>
        </div>
        <div className="cols-span-1 lg:col-span-2 w-full flex flex-col">
          {project.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </section>
      <div className="h-auto bg-primary flex flex-col justify-start items-start gap-6 py-24 px-6 md:px-[50px]">
        <p className="text-sm font-base text-primary bg-white uppercase px-6 py-2 rounded-[100px]">
          Get in touch
        </p>
        <h2 className="text-white font-medium text-3xl md:text-5xl">
          <span className="text-darkGray">HAVE AN IDEA? </span>
          LET'S DO IT TOGETHER!
        </h2>
        <p className="w-full md:w-1/2 text-white font-base text-xs md:text-sm">
          Harness your creativity and surpass your competitors with a
          professional web experience that will set you apart.
        </p>
        <Link href="/contact" className="md:w-auto w-1/2">
          <button className="bg-lightGray rounded-[100px] py-2 pl-4 pr-2 flex gap-3 items-center justify-center md:justify-start md:w-auto w-full">
            <span className="text-xs md:text-sm text-primary uppercase">
              contact
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
  );
}
