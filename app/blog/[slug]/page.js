import React from "react";
import moment from "moment";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data } = await fetch(process.env.NEXT_PUBLIC_GRAPHMCMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) { 
          createdAt
          slug
          title
          description
          featuredImage {
            url
          }
          categories {
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
  const post = data.post;
  return {
    title: `${post.title} - article by Dastan Hayama`,
    description: `${post.description} `,
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
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) { 
          createdAt
          slug
          title
          description
          featuredImage {
            url
          }
          categories {
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
  const post = data.post;
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
    <div className="flex flex-col  pt-[15vh] lg:pt-[28vh] pb-24 w-full gap-12 lg:gap-24">
      <section className="grid grid-cols-1 lg:grid-cols-3 px-6 md:px-[50px] gap-y-4">
        <div className="col-span-1 w-full lg:flex flex-col items-start justify-start">
          <p className="text-primary text-md font-medium uppercase">
            Insights & Inspiration
          </p>
        </div>
        <div className="cols-span-1 lg:col-span-2 lg:col-start-2 w-full flex flex-col gap-4 ">
          <img
            src={post.featuredImage.url}
            alt="me"
            className="object-cover w-full h-[50vh] lg:h-[65vh]"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center text-darkGray">
              {post.categories.map((category) => (
                <p
                  key={category.slug}
                  className="text-darkGray text-xs md:text-sm font-medium uppercase">
                  {category.name}
                </p>
              ))}
              |
              <p className="text-darkGray text-xs md:text-sm font-medium uppercase">
                2 min read
              </p>
            </div>
            <p className="text-darkGray text-xs md:text-sm font-medium uppercase">
              {moment(post.createdAt).format("MMMM, YYYY")}
            </p>
          </div>
          <h1 className="font-medium uppercase md:text-5xl text-3xl text-primary mt-12">
            {post.title}
          </h1>
          <p className="font-base text-primary text-xs md:text-sm w-full lg:w-4/5 uppercase">
            {post.description}
          </p>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </section>
    </div>
  );
}
