import { Link } from "react-router-dom";
import { IBlog } from "../../services/interface";

type Props = {
  data: IBlog
};

export function BlogList({ data }: Props) {
  return (
    <li>
      <div className="info">
        <h6>John Doe</h6>
        <small>May 3 2022</small>
      </div>
      <Link to={`/${data.id}`}>
        <p>{data.title}</p>
      </Link>
    </li>
  );
}