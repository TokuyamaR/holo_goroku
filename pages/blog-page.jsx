import Layout from 'components/Layout';
import { getAllPostsData } from 'lib/posts';
import Post from 'components/Post';

const Blog = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <p className='m-10'>{posts && posts.map((post) => <Post key={post.id} post={post} />)}</p>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
