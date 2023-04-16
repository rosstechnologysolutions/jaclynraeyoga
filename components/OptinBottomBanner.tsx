
import Link from 'next/link'

export default function OptInBottomBanner() {
  return (
    <>
			{/* Playlist Call to Action */}
			<section>
				<div className="bg-gradient-to-r from-accent to-accent-focus my-10">
					<h3 className="text-md font-bold md:font-normal md:text-4xl text-center p-4">Sign Up For Your Free Prenatal Playlist on Spotify</h3>
					<div className="flex flex-row justify-center p-1 pb-5">
					<Link href="https://upbeat-leader-1917.ck.page/43b949eaf3">
						<button className="btn btn-primary">Sign Up for the Link</button>
					</Link>
					</div>
				</div>
			</section>    
    </>
  )
}