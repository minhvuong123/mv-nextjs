import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/post-util";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022=02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022=02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022=02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2022=02-10",
//   },
// ];

export default function HomePage(props) {

  return (
    <Fragment>
       <Head>
        <title >Max' Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}
