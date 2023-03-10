import { blogData } from "../../services/BlogData";
import { BlogList } from "../BlogList";

export function Blog() {
  return (
    <div className="container">
      <div className="content">
        <ul>
          {
            blogData.map(
              (blog) =>
                <BlogList
                  key={blog.id}
                  blog={blog}
                />
            )
          }
        </ul>
      </div>
    </div>
  );
}
