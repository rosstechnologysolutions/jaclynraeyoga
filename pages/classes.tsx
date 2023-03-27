import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import PrenatalYoga from "../public/prenatalYoga.jpg"
export default function Classes() {
  return (
  	<>
	  <Head>
		<title>Jaclyn Rae Yoga | Classes</title>
	  </Head>
		{/* TODO: clean this up. need another photo of her*/}
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto">
				<section className="flex flex-col sm:flex-row p-5 w-full">
					<div className="sm:w-1/3">
						<h1 className="text-2xl py-5 text-center">Prenatal Classes</h1>
						<Image 
							className="float-left rounded-xl h-76 sm:w-auto sm:mr-10"
							alt="prenatal yoga class"
							src={PrenatalYoga}
						/>
					</div>
					<div className="sm:w-2/3 pt-16 pl-5 text-lg">
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

				<section>
					<div>
						<h1 className="text-2xl text-center my-5">Class Schedule</h1>
					</div>
					<div className="flex flex-flow-col md:flex-flow-row py-10">
						<ol>
							<li className="text-lg xs:text-xl"><span className="font-bold py-5">Class Name:</span> Shanti Mom Prenatal Yoga</li>
							<li className="text-lg xs:text-xl"><span className="font-bold py-5">Date and Time:</span> Wednesdays 6:30pm - 7:45pm ET</li>
							<li className="text-lg xs:text-xl"><span className="font-bold py-5">Studio:</span> NKO Yoga</li>
							<li className="text-lg xs:text-xl"><span className="font-bold py-5">City:</span> Deer Park, Ohio</li>
							<li className="text-lg xs:text-xl"><span className="font-bold py-5">Sign Up Link:</span><Link href="https://www.nkoyoga.com/prenatal-yoga.html" target="_blank"> <span className="underline">nkoyoga.com</span></Link></li>
						</ol>
					</div>
				</section>
			</div>
		</div>
	</>
	)
}