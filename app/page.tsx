
interface Post {
  id: number;
  title: string;
  body: string;
}


const getPostData = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
    cache: 'no-store',
  });
  return await response.json();
};

export default async function Home() {
  const postData = await getPostData();
  console.log(postData);

  return (
    <div>
      {postData.map((post: Post) => (
        <div key={post.id}>
          <h1>Title: {post.title}</h1>
          <p>Description: {post.body}</p>
        </div>
      ))}
    </div>
  );
}

