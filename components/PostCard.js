import React from "react";
import Link from "next/link";
import moment from "moment/moment";
function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="cols-span-1 w-full h-auto lg:h-[70vh] flex flex-col border-[1px] border-darkGray mb-4 img-scale-container cursor-pointer">
      <div className="basis-full lg:basis-1/3 h-auto max-h-[30vh] overflow-hidden">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-full object-cover h-[30vh] img-scale"
        />
      </div>
      <div className="basis-full lg:basis-2/3 p-4 md:p-8 flex flex-col justify-between lg:gap-0 gap-8 items-start">
        <h3 className="  uppercase text-lg text-primary">{post.title}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-md text-darkGray font-light">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
          {post.categories.map((item) => (
            <p key={item.slug} className="text-sm md:text-md text-primary">
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
