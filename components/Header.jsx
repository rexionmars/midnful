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
        <div className='main-container container mx-auto px-10 mb-8 mt-6 rounded-xl'>
            <div className="w-full inline-block">
                <div className='w-full inline-block py-2'>
                    <div className='md:float-left block mt-2'>
                        <Link href='/'>
                            <span className='cursor-pointer px-5 font-normal p-1 rounded-lg transition-all duration-500 hover:bg-sky-400 bg-sky-300 text-base text-zinc-700'>HOME</span>
                        </Link>
                        <Link href='/about'>
                            <span className='cursor-pointer px-5 m-4 font-normal p-1 rounded-lg transition-all duration-500 hover:bg-sky-400 bg-sky-300 text-base text-zinc-700'>Projeto</span>
                        </Link>
                        <Link href='/contact'>
                            <span className='cursor-pointer px-5 font-normal p-1 rounded-lg transition-all duration-500 hover:bg-sky-400 bg-sky-300 text-base text-zinc-700'>Contatos</span>
                        </Link>
                        <Link href='/privacity'>
                            <span className='cursor-pointer px-5 font-normal p-1 rounded-lg transition-all lg:visible invisible duration-500text-base hover:text-sky-700 text-sky-400'>Politica de Privacidade</span>
                        </Link>
                    </div>
                    <div className='hidden md:float-left md:contents'>
                        {categories.map((category) => (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <span className='md:float-right mt-2 align-middle ml-4 font-normal cursor-pointer transition-all duration-500 hover:bg-sky-300 hover:text-zinc-700 text-sky-300 border border-sky-300 px-2 py-1 rounded-lg'>
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header