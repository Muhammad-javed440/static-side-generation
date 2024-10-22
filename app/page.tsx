const getPostData = async()=>{
  const response = await fetch("http://jsonplaceholder.typicode.com/posts",{
    cache:'no-store',
  })
  return await response.json()
}

export default async function Home() {
  const postData = await getPostData()
  console.log(postData)
  return (
<div>
  {postData.map((post:any) =>
    <div><h1>{post.id}</h1><h1>Title : {post.title}</h1> <p>Description : {post.body}</p></div> )}
</div>
  );
}
