import React from "react";
import { PropsImg } from "../../typescript/interface";

const Article: React.FC<PropsImg> = ({ imgUrl }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="blogImage" />
      </div>
    </div>
  );
};

export default Article;
