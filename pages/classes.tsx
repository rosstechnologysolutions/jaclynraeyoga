import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import PrenatalYoga from "../public/prenatalYoga.jpg"
export default function Classes() {
  return (
  	<>
	  <Head>
		<title>Jaclyn Rae Yoga | Classes</title>
		<meta name="title" content="Jaclyn Rae Yoga | Classes"/>
	  </Head>
		{/* TODO: clean this up. need another photo of her*/}
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto">
			<h1 className="text-2xl py-5 text-center">Prenatal Classes</h1>
				<section className="p-5 w-full">
						<Image 
							className="float-left h-48 w-72 sm:h-72 rounded-xl sm:w-96 sm:mr-10 mx-auto"
							alt="prenatal yoga class"
							src={PrenatalYoga}
						/>
					<div className="text-lg">
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
				<div className="divider"></div> 
				<section>
					<div>
						<h1 className="text-2xl text-center my-5">In-Person Class Schedule</h1>
					</div>
					<div className="flex flex-col md:flex-row md:justify-center">
						<div className="py-5 md:p-10">
							<ol>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Class Name:</span> Shanti Mom Prenatal Yoga</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Date and Time:</span> Wednesdays 6:30pm - 7:45pm ET</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Studio:</span> NKO Yoga</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">City:</span> Deer Park, Ohio</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Sign Up Link:</span><Link href="https://www.nkoyoga.com/prenatal-yoga.html" target="_blank"> <span className="underline">nkoyoga.com</span></Link></li>
							</ol>
						</div>
						<div className="py-5 md:p-10">
							<ol>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Class Name:</span> Shanti Mom Prenatal Yoga (Ala Carte Classes)</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Date and Time:</span> Mondays 6:00pm - 7:15pm ET</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Studio:</span> Nurture Office</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">City:</span> Hyde Park, Ohio</li>
								<li className="text-lg xs:text-xl"><span className="font-bold py-5">Sign Up Link:</span><Link href="https://www.welcometonurture.com/yoga-meditation" target="_blank"> <span className="underline">welcometonurture.com</span></Link></li>
							</ol>
						</div>
					</div>
				</section>
			</div>
		</div>
	</>
	)
}