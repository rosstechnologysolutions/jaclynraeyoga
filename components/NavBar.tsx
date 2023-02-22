
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
        <Link className="invisible sm:visible" href="/">
            <Image
              alt="logo for jaclyn rae yoga"
              src={Logo}
              width={100}
              height={100}
              >
            </Image>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 invisible sm:visible">
            <li className="text-xl font-bold"><Link href="/">Home</Link></li>
            <li className="text-xl font-bold"><Link href="/about">About</Link></li>
            <li className="text-xl font-bold"><Link href="/schedule">Schedule</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}