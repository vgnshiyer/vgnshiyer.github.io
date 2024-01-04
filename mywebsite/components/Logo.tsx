import React from 'react'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className="flex items-center">
        <Link href="/">
            <div className="flex flex-row text-xl font-semibold tracking-[1px]">
            <FaEnvelope className="w-7 h-7 text-secondary mr-2" />
            <span className="text-black dark:text-white">vgnshiyer</span>
            <span className="text-secondary">{'@gmail'}</span>
            <span className="text-black dark:text-white">.com</span>
            </div>
        </Link>
    </div>
  )
}

export default Logo