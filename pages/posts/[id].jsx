import Link from 'next/link';
import Layout from 'components/Layout';
import { getAllPostIds, getPostData } from 'lib/posts';

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout title={post.title}>
        <p className='m-4'>
          {'ID : '}
          {post.id}
        </p>
        <p className='mb-8 text-xl font-bold'>{post.title}</p>
        <p className='px-10'>{post.body}</p>
        <Link href='/blog-page' passHref>
          <div className='flex cursor-pointer mt-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 19l-7-7 7-7m8 14l-7-7 7-7' />
            </svg>
            <span>Back to Blog List Page</span>
          </div>
        </Link>
      </Layout>
    );
  }
};

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false, // 返されないパスは全て404となる(例えばid:101など)
  };
};

export const getStaticProps = async ({ params }) => {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
