import React, { useContext, useState } from "react";
import LatestBlog from "../miniComponents/LatestBlog";
import HeroSection from "../miniComponents/HeroSection";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlog heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />
      </article>
    </>
  );
};

export default Home;