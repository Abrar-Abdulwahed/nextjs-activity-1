
const PostDetails = ({ post }) => {
  return (
    <div>{ post.title }</div>
  )
}

export async function getStaticPaths(){
    const API_URL = `https://dummyjson.com/posts`;
    const res = await fetch(API_URL);
    const posts = await res.json();

    // get ids
    const paths = posts.posts.map(post => ({
        params: {id: String(post.id)}
    }));
    console.log(paths);
    return { paths, fallback: false}
}

export async function getStaticProps({ params }){
    const API_URL = `https://dummyjson.com/posts/${params.id}`;
    const res = await fetch(API_URL);
    const post = await res.json();

    return { props: { post }}
}

export default PostDetails