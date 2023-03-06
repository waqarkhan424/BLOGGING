import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ urlpath, title, description }) => {
  return (
    <ListGroup>
      <Link to={`/article/${urlpath.toString()}`}>
        <ListGroup.Item key={urlpath}>
          <h4
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h4>
          <p style={{ height: "6rem", overflow: "hidden" }}>{description}</p>
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};

export default Article;
