import React, { useContentex, useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '@/services'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8 mt-6'>
            <div className='border-b w-full inline-block border-gray-400 py-2'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>HOME</span>
                    </Link>
                    <Link href='/more'>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>Sobre</span>
                    </Link>
                    <Link href='/contact'>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>Contato</span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-zinc-700 ml-4 font-normal cursor-pointer bg-sky-200 px-2 py-1 rounded-lg'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header