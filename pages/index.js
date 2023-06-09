import Head from 'next/head'
import { PostCard, PostWidget, Categories, Footer, Button } from '@/components'
import { getPosts } from '@/services'
import { FeaturedPosts} from '@/sections'

export default function Home({ posts }) {

  return (
    <div className='container mx-auto px-10 mb-10 trs'>
      <Head>
        <title>MINDFUL EXPLORER</title>
        <meta name="google-site-verification" content="349vx450NlhnPKr02DPe92oc7yEsaOoAxEKY2J0fy9Q" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Marck+Script&family=Poppins:wght@100;200;300;400;500;600;700;800&family=Varela+Round&display=swap" rel="stylesheet" />
      </Head>

      <FeaturedPosts />

      {/* Custom header */}
      <div className='main-container container mx-auto mb-10 h-[32em] min-h-full rounded-xl'>
        <div className='flex justify-center py-6'>
          <img
            className=''
            src='/brain.png'
            height='300px'
            width='300px'
          />
        </div>
        <div className='lg:text-8xl text-4xl font-varela font-bold text-center text-sky-500'>
          <h1>MINDFUL EXPLORER</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <Button />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}