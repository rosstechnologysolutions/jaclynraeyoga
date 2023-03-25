
import Image from 'next/image'
import Link from 'next/link'

import Logo from "../public/logo.webp"

export default function NavBar() {

  return (
    <>
      {/* NAV */}
      {/* TODO: resize font on mobile*/}
      <div className="navbar bg-accent">
        <div className="flex-1">
        <Link className="" href="/">
            <Image
              alt="logo for jaclyn rae yoga"
              src={Logo}
              width={100}
              height={100}
              >
            </Image>
          </Link>
        </div>
        <div className="flex-2">
          <div className="flex-none sm:none">
            <ul className="menu menu-horizontal hidden sm:flex">
              <li className="text-xl font-bold"><Link href="/">Home</Link></li>
              <li className="text-xl font-bold"><Link href="/about.html">About</Link></li>
              <li className="text-xl font-bold"><Link href="/classes.html">Classes</Link></li>
              {/* <li className="text-xl font-bold"><Link href="/subscribe.html">Subscribe</Link></li> */}
            </ul>
          </div>
          <div className="flex-none sm:hidden">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </a>
                  <ul className="p-2 bg-base-100 z-10 drop-shadow">
                    <br />
                    <li className="text-xl font-bold"><Link href="/">Home</Link></li>
                    <li className="text-xl font-bold"><Link href="/about.html">About</Link></li>
                    <li className="text-xl font-bold"><Link href="/classes.html">Classes</Link></li>
                    {/* <li className="text-xl font-bold"><Link href="/subscribe.html">Subscribe</Link></li> */}
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}