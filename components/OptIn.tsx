
import Image from 'next/image'
import Link from 'next/link'

import Logo from "../public/logo.webp"

export default function NavBar() {

  return (
    <>
      {/* NAV */}
      {/* TODO: resize font on mobile*/}
      <div className="navbar bg-primary">
        <div className="flex-1">
          <h1 className="text-xl">Sign Up for Your Free Spotify Playlist</h1>
        </div>
        <div className="flex-none">
          <Link href="https://upbeat-leader-1917.ck.page/43b949eaf3">
					  <button className="btn btn-secondary">Sign Up</button>
				  </Link>
        </div>
      </div>
    </>
  )
}