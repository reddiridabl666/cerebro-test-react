import "./Post.css";
import userAvatar from "../assets/user.png";

export interface PostProps {
  user: string;
  title: string;
  body: string;
}

export const Post = ({ user, title, body }: PostProps) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__user">
          <img className="post__user-avatar" src={userAvatar} alt="avatar" />
          <div className="post__user-name">{user}</div>
        </div>
        <div className="post__title">{title}</div>
      </div>
      <div className="post__content">{body}</div>
    </div>
  );
};
