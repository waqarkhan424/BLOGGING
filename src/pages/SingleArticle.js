import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import db from "../firebase";

const SingleArticle = () => {
  const { urlpath } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "articles"),
      where("urlpath", "==", parseInt(urlpath))
    );
    const fetchArticle = async () => {
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 0) {
          console.log("No matching documents.");
        } else {
          querySnapshot.forEach((doc) => {
            setArticle(doc.data());
          });
        }
      } catch (error) {
        console.log("Error getting article: ", error);
      }
    };

    fetchArticle();
  }, [urlpath]);

  return (
    <div>
      {article && (
        <div>
          {/* <h2>{article.title}</h2> */}
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
