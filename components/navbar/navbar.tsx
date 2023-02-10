
import Image from 'next/image'

import Logo from "../../public/logo.webp"

export default function NavBar() {

    return (
        <>
            {/* NAV */}
            {/* TODO: center jaclyn rae in the nav bar, not in the cols*/}
            {/* TODO: resize font on mobile*/}
            <div className="navbar bg-accent grid grid-flow-col grid-cols-2 col-auto">
                <Image
                alt="logo for jaclyn rae yoga"
                src={Logo}
                width={100}
                height={100}
                >
                </Image>
                <div className="items-center pr-90">
                <a className="normal-case text-5xl text-base-200 font-bold drop-shadow-md">Jaclyn Rae Yoga</a>
                </div>
            </div>
        </>
    )
}