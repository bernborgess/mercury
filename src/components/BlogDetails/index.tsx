import { useParams } from "react-router-dom";
import { blogData } from "../../services/BlogData";

export function BlogDetails() {
  const { id } = useParams();
  const [blog] = blogData.filter((blog) => blog.id === id);

  return (
    <div className="container">
      <div className="content">
        <ul>
          <li>
            <div className="info">
              <h6>{blog.createdBy}</h6>
              <small>{blog.dateCreated}</small>
            </div>
            <p>{blog.title}</p>
            <img src={blog.cover} />
            <p className="body">{blog.body}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}