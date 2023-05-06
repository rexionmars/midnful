import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    // console.log(post)
    return (
        <div className='border-2 border-sky-100 border-none post-shadow shadow-4xl rounded-xl p-0 lg:pb-5 pb-12 mb-8'>
            <div className='relative overflow-hidden pb-80 mb-6'>
                <img
                   src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover bg-center  rounded-t-lg'
                />
            </div>
            <h1 className="font-varela text-center mb-8 cursor-pointer text-zinc-300 text-4xl font-semibold subpixel-antialiased">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full  lg:w-auto mr-8'>
                    <img 
                        alt={post.author.name}
                        height="60px"
                        width="60px"
                        className='align-middle rounded-full'
                        src={post.author.photo.url}
                    />
                    <p className='inline align-middle font-medium text-sky-200 ml-3 text-lg'>{post.author.name}</p>
                </div>
                <div className='font-light text-pink-600 bg-pink-300 px-2 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-orange-600 text-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle text-sm">{moment(post.createdAt).format('DD - MM - YYYY')}</span>
                </div>
            </div>
            <p className='text-center text-gray-400 text-lg px-4 lg:px-20 mb-8'>{post.excerpt}</p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className=' bg-green-400 font-medium text-green-700 p-2 rounded-lg cursor-pointer'>Continuar lendo</span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard