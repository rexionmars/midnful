import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '@/components'
import { getPosts } from '@/services'

const posts = [
  { title: 'React Testing', excerpt: 'Learning React Testing'},
  { title: 'React Testing', excerpt: 'Learning React Testing'},
  { title: 'React Testing', excerpt: 'Learning React Testing'},
  { title: 'React Testing', excerpt: 'Learning React Testing'},
]

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-10'>
      <Head>
        <title>MINDFUL EXPLORER</title>
      </Head>

      {/* Custom header */}
      <div className='main-container container mx-auto mb-10 h-96 min-h-full'>
        <div>
          <h1>Foo bar Content Center</h1>
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