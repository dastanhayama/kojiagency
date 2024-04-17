import Link from "next/link";
import React from "react";

function ProjectCard({ project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="flex flex-col gap-4 md:gap-8 h-auto col-span-1 img-scale-container">
      <div className="w-full lg:max-h-[70vh] max-h-[300px] overflow-hidden ">
        <img
          src={project.featuredImage.url}
          alt={project.title}
          className="lg:h-[70vh] h-[300px] w-full object-cover img-scale"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <p className="font-medium uppercase text-xl md:text-2xl text-primary">
          {project.title}
        </p>
        <ul className="flex gap-4">
          {project.workCategories.map((category) => (
            <li
              key={category.slug}
              className="text-sm md:text-md text-primary uppercase">
              {category.name}
            </li>
          ))}
        </ul>
        {/* <Link
          href={`/work/${project.slug}`}
          className="px-4 py-1 bg-white border-[1px] border-darkGray rounded-[100px] text-sm font-light text-primary">
          View
        </Link> */}
      </div>
    </Link>
  );
}

export default ProjectCard;
