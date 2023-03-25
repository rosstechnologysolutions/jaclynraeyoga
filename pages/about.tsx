import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import JaclynAbout from '../public/jaclynAbout.webp'
export default function About() {
  return (
  	<>
	  <Head>
		<title>Jaclyn Rae Yoga | About</title>
	  </Head>
		{/* TODO: clean this up. need another photo of her*/}
		<div className="flex flex-col min-h-screen">
			<div className="container">
				<h1 className="text-center text-4xl text-primary-content p-10">About Me</h1>
				<div className="text-xl font-normal">
					<Image
						alt="picture of Jaclyn"
						className="float-left h-96 rounded-xl w-72 mr-10"
						src={JaclynAbout}
					/>
					<div className="ml-10">
						<p>
							My name is Jaclyn Ross. I&apos;m a 200-HR RYT Yoga Teacher, an 85-hour Shanti Mom Prenatal Yoga Teacher and a Certified Health Education Specialist. In my classes, you can expect alignment-focused poses with breath and meditation work that is appropriate for all levels.
						</p>
						<br />
						<p>
							I began my yoga journey in college, when I took a semester-long class at the University of Cincinnati. In this class, I was exposed to a variety of yoga styles including Hatha, Vinyasa, Ashtanga, and Yin. I fell in love with how yoga could be so versatile in style and accessibility. Since this class I had the dream of being a yoga teacher, but the timing was never right. I continued to practice on my own and at various studios over the years. Fast forward to 2019, I was an overwhelmed elementary school teacher expecting my first child. I began taking a weekly prenatal yoga class to relieve stress and help with the aches and pains of pregnancy. I immediately fell in love with prenatal yoga and hoped to teach one day.
						</p>
						<br />
						<p>
							In March 2020, my daughter was born and the pandemic hit. I decided to leave elementary education and set out to follow my dreams of becoming a yoga teacher and balancing the stay-at-home-mom life. I have since completed my 200 & 300 HR YTT through Uplifted Yoga with Brett Larkin and an 85-hour prenatal yoga course with Shanti Mom Yoga while being pregnant with my second daughter. I loves to learn, teach, and connect with my students. I am in the thick of motherhood myself and have developed a passion for providing moms with a safe, supportive space to relax and connect with themselves, baby, and other mamas.
						</p>
					</div>
				</div>
			</div>
		{/* CALL TO ACTION */}
		<section>
			<div className="bg-gradient-to-r from-accent to-accent-focus mt-10">
				<h3 className="text-center text-2xl text-primary-content p-5">Check Out My Class Schedule</h3>
				<div className="grid justify-items-center p-5">
					<Link href="/classes">
						<button className="btn btn-active btn-primary">See Classes</button>
					</Link>
				</div>
			</div>
		</section>
		</div>
	</>
	)
}