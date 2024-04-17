import Link from "next/link";
import PostCard from "@components/PostCard";
import moment from "moment/moment";

export async function generateMetadata() {
  return {
    title: "Insights and Inspiration - My Blog",
    description:
      "Welcome to my blog page, where I share insightful articles and inspiring stories about the fascinating world of web development and design. Join me on a journey of discovery as I delve into the latest trends, best practices, and innovative techniques that shape the digital landscape. Gain valuable insights into optimizing user experiences, explore thought-provoking discussions on design principles, and uncover the secrets to creating captivating websites. Let's embark on this exciting adventure together, where inspiration meets expertise. Get ready to ignite your creativity and stay ahead in the ever-evolving field of technologies",
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
        postsConnection {
          edges {
            node {
              createdAt
              slug
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              featuredPost
            }
          }
        }
      }
      `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());
  const posts = data.postsConnection.edges;
  const regularPosts = posts.filter((post) => !post.node.featuredPost);
  const featuredPosts = posts.filter((post) => post.node.featuredPost);
  return (
    <div className="flex flex-col  pt-[15vh] lg:pt-[20vh] pb-12 w-full">
      <div className="flex flex-col justify-start items-start gap-8 w-full pb-32 px-6 md:px-[50px]">
        <h1
          className={`font-medium md:text-5xl text-3xl text-primary uppercase mb-12 lg:mb-24`}>
          <span className="text-darkGray">Insights</span> &{" "}
          <span className="text-darkGray">Inspiration</span> : Engaging Articles
          for Curious Minds
        </h1>
        {featuredPosts.map((item) => (
          <Link
            href={`/blog/${item.node.slug}`}
            className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row border-[1px] border-darkGray mb-12 img-scale-container">
            <div className="basis-full lg:basis-2/3 h-auto overflow-hidden">
              <img
                src={item.node.featuredImage.url}
                alt={item.node.title}
                className="w-full h-[50vh] lg:h-[80vh] object-cover img-scale"
              />
            </div>
            <div className="basis-full lg:basis-1/3 md:p-8 p-4 flex flex-col justify-between lg:gap-0 gap-8 items-start">
              <h3 className="font-medium uppercase text-xl md:text-3xl text-primary">
                {item.node.title}
              </h3>
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-md text-darkGray font-light">
                  {moment(item.node.createdAt).format("MMM DD, YYYY")}
                </p>
                {item.node.categories.map((item) => (
                  <p
                    key={item.slug}
                    className="text-sm md:text-md text-primary">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-auto">
          {regularPosts
            .map((post) => <PostCard post={post.node} key={post.node.slug} />)
            .reverse()}
        </section>
      </div>
    </div>
  );
}
