import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    // console.log(post)
    return (
        <div className='border-2 border-zinc-200 bg-slate-100 shadow-xl rounded-xl p-0 lg:p-5 pb-12 mb-8'>
            <div className='relative overflow-hidden pb-80 mb-6'>
                <img
                   src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover bg-center shadow-lg rounded-t-lg lg:rounded-xl'
                />
            </div>
            <h1 className="font-varela text-center mb-8 cursor-pointer text-zinc-700 text-4xl font-semibold subpixel-antialiased">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full  lg:w-auto mr-8'>
                    <img 
                        alt={post.author.name}
                        height="40px"
                        width="40px"
                        className='align-middle rounded-lg'
                        src={post.author.photo.url}
                    />
                    <p className='inline align-middle text-gray-700 ml-3 text-lg'>{post.author.name}</p>
                </div>
                <div className='font-medium text-gray-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('DD - MM - YYYY')}</span>
                </div>
            </div>
            <p>{post.excerpt}</p>
        </div>
    )
}

export default PostCard