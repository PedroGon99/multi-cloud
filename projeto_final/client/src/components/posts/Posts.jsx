import Post from "../post/Post";
import "./posts.css";


//For each post we will call a Post component
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}