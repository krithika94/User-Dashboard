import { Post } from '../types';

interface PostListProps {
  currentPosts: Post[];
}

export const PostList = ({ currentPosts }: PostListProps) => {
  if (!currentPosts || currentPosts.length === 0) {
    return <p>No posts to display.</p>;
  }

  return (
    <div>
      {currentPosts.map((post) => (
        <div key={post.id} className="card bg-base-100 w-full shadow-xl mt-4">
          <div className="card-body p-[1.3rem] text-gray-500">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};