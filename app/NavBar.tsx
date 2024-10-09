import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-black via-violet-800 to-violet-600 p-4 fixed w-full z-50 top-0 text-white hover:shadow-2xl hover:shadow-sky-600 flex justify-around xl:text-xl xl:font-bold '>
        <Link href="/" className='hover:underline'>BIOMEDICA</Link>
        <Link href="/dashboard" className='hover:underline'>REGISTRO DE DATOS</Link>
    </nav>
  )
}
