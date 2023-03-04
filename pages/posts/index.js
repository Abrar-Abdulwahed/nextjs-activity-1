import Link from "next/link"
const index = ({ posts }) => {
  const postList = posts.posts.map(post => {
    return (
    <>
        <div>
          {post.title}
          <Link href={`/posts/${post.id}`}>
            Read More
          </Link>
        </div>
      </>
    );
  });
  return postList;
}
export async function getStaticProps(){
    const API_URL = `https://dummyjson.com/posts`;  
    const res = await fetch(API_URL);
    const posts = await res.json();
    return {
        props: { posts },
    };
}

export default index