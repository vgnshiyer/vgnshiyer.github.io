import React from 'react'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className="flex items-center">
        <Link href="/">
            <span className="text-contrast-light dark:text-contrast-dark text-2xl font-poppins font-bold">vgnshiyer.</span>
        </Link>
    </div>
  )
}

export default Logo