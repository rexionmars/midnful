import React, { useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';
import { getRecentPosts, getSimilarPosts } from '@/services'

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

    return (
        <div className='post-shadow shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-medium text-gray-300 border-b border-gray-500'>{slug ? 'Últimas postagens' : 'Postagens recentes'}</h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-100 flex-none'>
                        <Image
                          loader={grpahCMSImageLoader}
                          alt={post.title}
                          height={60}
                          width={60}
                          unoptimized
                          className="align-middle rounded-md"
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