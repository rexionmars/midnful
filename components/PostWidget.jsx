import React, { useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '@/services'

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className='post-shadow shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-medium text-gray-300 border-b border-sky-900'>{slug ? 'Últimas postagens' : 'Postagens recentes'}</h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-100 flex-none'>
                        <img
                            alt={post.title}
                            height='60px'
                            width='60px'
                            className='align-middle rounded-full'
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-300 font-xs'>
                            {moment(post.createdAt).format('DD MMM, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md text-gray-500'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget