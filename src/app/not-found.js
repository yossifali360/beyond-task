import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='error__page flex flex-col md:flex-row items-center justify-center'>
            <div className='text-center'>
                <h1>404</h1>
                <h3 className='text-5xl'>Oops!</h3>
                <p className='my-3'>The page you are looking for couldn’t be found</p>
                <Link className='font-semibold bg-[#387ADF] rounded-3xl text-white px-5 py-2' href={'/'}>Go Home</Link>
            </div>
            <Image src="/assets/images/error.png" width={330} height={300} alt="error img" />
        </div>
    )
}
