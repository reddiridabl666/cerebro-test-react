import "./Feed.css";
import { Post, PostProps } from "./Post";

interface FeedProps {
  posts: PostProps[];
}

const FeedComponent = ({ posts }: FeedProps) => {
  return <div className="feed">{posts.map(Post)}</div>;
};

export default FeedComponent;
