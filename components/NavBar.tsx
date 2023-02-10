
import Image from 'next/image'
import Link from 'next/link'

import Logo from "../public/logo.webp"

export default function NavBar() {

  return (
    <>
      {/* NAV */}
      {/* TODO: center jaclyn rae in the nav bar, not in the cols*/}
      {/* TODO: resize font on mobile*/}
      <div className="navbar bg-accent grid grid-flow-col grid-cols-2 col-auto">
        <Link href="/">
          <Image
          	alt="logo for jaclyn rae yoga"
            src={Logo}
            width={100}
            height={100}
            >
          </Image>
            </Link>
              <div className="items-center pr-90">
              	<a className="normal-case text-5xl text-base-200 font-bold drop-shadow-md">Jaclyn Rae Yoga</a>
            	</div>
        <div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li className="text-xl font-bold"><Link href="/">Home</Link></li>
						<li className="text-xl font-bold"><Link href="/about">About</Link></li>
					</ul>
				</div>
      </div>
    </>
  )
}