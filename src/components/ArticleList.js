import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Article from "./Article";
//////////////////////////////////////////////

const getArticles = async () => {
  const articlesCollection = collection(db, "articles");
  const snapshot = await getDocs(articlesCollection);
  return snapshot.docs.map((doc) => doc.data());
};

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      {articles.map((blog) => {
        return (
          <Article
            key={blog.urlpath}
            urlpath={blog.urlpath}
            title={blog.title}
            description={blog.description}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
