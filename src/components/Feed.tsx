import "./Feed.css";
import { Post, PostProps } from "./Post";

interface FeedProps {
  posts: PostProps[];
}

const Feed = ({ posts }: FeedProps) => {
  return <div className="feed">{posts.map(Post)}</div>;
};

export default Feed;
