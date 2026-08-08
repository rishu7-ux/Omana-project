import { notFound } from "next/navigation";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

import BlogHero from "@/components/blog/BlogHero";
import BlogDetails from "@/components/blog/BlogDetails";

import { blogs } from "@/data/blogs";

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogDetailsPage({ params }: Props) {

  const blog = blogs.find(
    (item) => item.slug === params.slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Header />
      <SocialSidebar />

      <main>

        <BlogHero />

        <BlogDetails blog={blog} />

      </main>

      <Footer />
    </>
  );
}