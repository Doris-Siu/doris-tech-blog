type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
