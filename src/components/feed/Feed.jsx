import PostCard from './PostCard';

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: 'Emma',
      time: '2 hours ago',
      content: 'Had a beautiful Sunday dinner together 💜'
    },
    {
      id: 2,
      author: 'Lucas',
      time: 'Yesterday',
      content: 'Movie night with popcorn 🍿'
    }
  ];

  return (
    <div className="space-y-8 transition-all duration-500">
      {posts.map((post) => (
        <div
          key={post.id}
          className="opacity-0 animate-[fadeIn_0.6s_ease_forwards]"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
