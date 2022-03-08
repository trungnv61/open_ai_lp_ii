import React from "react";
import from '../../assets/'


const Article: React.FC = ({imgUrl}) => {
  return (
    <div className="gpt3__blog-container__article">
      Article
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="blogImage" />
        </div>
    </div>
  );
};

export default Article;
