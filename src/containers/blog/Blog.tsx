import React from "react";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import "./blog.css";

const Blog: React.FC = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog1} />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog2} />
            <Article imgUrl={blog3} />
            <Article imgUrl={blog4} />
            <Article imgUrl={blog5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
