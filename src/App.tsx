import { useEffect, useState } from "react";
import "./App.css";
import FeedComponent from "./components/Feed";
import { PostProps } from "./components/Post";
import User from "./types/User";
import Post from "./types/Post";

function App() {
  const [postProps, setPostProps] = useState<PostProps[]>([]);

  const endpoint = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchData = async () => {
      const usersResp = await fetch(endpoint + "users");
      const users: User[] = await usersResp.json();

      console.log(users);

      const postsResp = await fetch(endpoint + "posts");
      const posts: Post[] = await postsResp.json();

      console.log(posts);

      setPostProps(
        posts.map(
          (post): PostProps => ({
            user: users[post.userId - 1].username,
            title: post.title,
            body: post.body,
          })
        )
      );
    };

    fetchData();
  }, []);

  return (
    <>
      <FeedComponent posts={postProps} />
    </>
  );
}

export default App;
