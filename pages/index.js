import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '@/components'
import { getPosts } from '@/services'

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-10'>
      <Head>
        <title>MINDFUL EXPLORER</title>
      </Head>

      {/* Custom header */}
      <div className='main-container container mx-auto mb-10 h-[32em] min-h-full rounded-xl'>
        <div className='flex justify-center py-6'>
          <img
            className=''
            src='/brain.png'
            height='250px'
            width='250px'
          />
        </div>
        <div className='text-6xl font-varela font-bold text-center text-sky-300'>
          <h1>MINDFUL EXPLORER</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>
        <div className='lg:col-span-4 col-spna-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}