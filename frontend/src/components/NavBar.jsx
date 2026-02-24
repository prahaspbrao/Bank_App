import React from 'react'
import Logo from './reusable/Logo'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <header className="w-full border-b rounded-b-md">
        <nav className='lg:w-[80%] mx-auto w-[98%] flex items-center justify-between py-3'>
            <Logo />

            <ul className="flex items-center justify-center gap-x-2">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>

                <li>
                    <Link href={"/services"}>Service</Link>
                </li>

                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default NavBar
