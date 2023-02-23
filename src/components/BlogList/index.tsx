import { Link } from "react-router-dom";
import { IBlog } from "../../services/interface";

type Props = {
  blog: IBlog
};

export function BlogList({ blog }: Props) {
  return (
    <li>
      <div className="info">
        <h6>{blog.createdBy}</h6>
        <small>{blog.dateCreated}</small>
      </div>
      <Link to={`/${blog.id}`}>
        <p>{blog.title}</p>
      </Link>
    </li>
  );
}