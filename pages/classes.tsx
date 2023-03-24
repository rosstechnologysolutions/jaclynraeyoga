import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// import JaclynAbout from '../public/jaclynAbout.webp'
export default function Classes() {
  return (
  	<>
	  <Head>
		<title>Jaclyn Rae Yoga | Classes</title>
	  </Head>
		{/* TODO: clean this up. need another photo of her*/}
		<div className="flex flex-col min-h-screen">
			<div className="container">
				<section>
					<h1 className="text-2xl">Prenatal</h1>
					<div>
						<p>
								Pregnancy is a time of many physical changes in the body. Through Prenatal Yoga you can learn techniques and postures to help prepare the body for birth and alleviate common pregnancy symptoms. We will practice postures that will help to strengthen and relax the body for pregnancy and labor.
						</p>
						<br />
						<p>
								Prenatal Yoga extends beyond the physical body, reaching the mind and spirit.  In each class you will learn to eliminate fears and channel your energy into strength, focus, and peace through guided mediations and breathing strategies.  Gain a deep sense of connection with your body, spirit, and baby to gain trust and confidence in yourself and your ability to give birth.
						</p>
						<br/>
						<p>
							Lastly, a prenatal yoga class is a wonderful way to find community. Join other pregnant moms on a similar journey. Commune with each other and share experiences to develop friendships and connections that can extend beyond the yoga mat. Mothers in all stages of pregnancy are welcome in this class and no yoga experience is necessary.
						</p>
					</div>

				</section>
				
			</div>
		{/* CALL TO ACTION */}
		<section>
			<div className="bg-gradient-to-r from-accent to-accent-focus mt-10">
				<h3 className="text-center text-2xl text-primary-content p-5">Check Out My Class Schedule</h3>
				<div className="grid justify-items-center p-5">
					<Link href="/schedule">
						<button className="btn btn-active btn-primary">See Schedule</button>
					</Link>
				</div>
			</div>
		</section>
		</div>
	</>
	)
}