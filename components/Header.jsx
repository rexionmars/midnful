import React, { useContentex } from 'react'

import Link from 'next/link'

const categories = [
    { name: 'Alimentação', slug: 'alimentacao'},
    { name: 'Depressão', slug: 'depressao'},
    { name: 'Cyberbullying', slug: 'cyberbullying'},
    { name: 'Redes Sociais', slug: 'rede_social'},
    { name: 'Saúde Mental', slug: 'saude_mental'},
    { name: 'Cultura', slug: 'cultura'},
    { name: 'Psicologia 4.0', slug: 'psicologia'},
]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8 mt-6'>
            <div className='border-b w-full inline-block border-gray-800 py-2'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>HOME</span>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>Sobre</span>
                        <span className='cursor-pointer px-5 font-regular text-xl text-sky-500'>Contato</span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-black ml-4 font-normal cursor-pointer'>
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