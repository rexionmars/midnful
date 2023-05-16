import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '@/services'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='post-shadow shadow-2xl rounded-lg p-8 mb-8 pb-12'>
            <h3 className='text-xl mb-8 font-medium text-gray-300 border-b border-gray-500'>Categorias</h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='cursor-pointer block pb-3 mb-3 text-gray-400'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories