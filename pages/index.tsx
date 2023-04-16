import OptInBottomBanner from '@/components/OptinBottomBanner'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Jaclyn from "../public/jaclyn.webp"
import PrenatalYoga from "../public/prenatalYoga.jpg"
import YogaPrivateLessons from "../public/yogaPrivateLessons.jpg"

export default function Home() {
	return (
		<>
			<Head>
				<title>Jaclyn Rae Yoga | Home</title>
				<meta name="title" content="Jaclyn Rae Yoga | Home"/>
			</Head>
			{/* HERO */}
			<section className="w-screen">
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row px-0.5">
						<Image
							alt="picture of Jaclyn the yoga teacher"
							className="max-w-sm rounded-lg shadow-2xl"
							src={Jaclyn}
						>
						</Image>
						{/* <div>
							<h1 className="text-5xl font-bold mb-5 text-center">Meet Your Yoga Teacher</h1>
							<p className="py-6 text-xl">Hi, I&apos;m Jaclyn. I have a passion for yoga and helping others get moving on their mat. Yoga has changed my life and I think it can change yours. Click below to learn more about my experience and certifications.</p>
							<div className="flex content-center justify-center xs:justify-start">
									<Link href="/about">
										<button className="btn btn-primary">About Me</button>
									</Link>
							</div>
						</div> */}
						<div>
							<h1 className="text-4xl font-bold mb-5 text-center">Prenatal Yoga Classes for Every Trimester</h1>
							<p className="pt-6 text-xl text-center">Join an approachable prenatal yoga class for all skill levels.</p>
							<p className="pb-6 text-xl text-center">Connect with yourself, baby, and other soon to be moms.</p>
							<div className="flex content-center justify-center xs:justify-start">
									<Link href="/classes">
										<button className="btn btn-primary">Class Schedule</button>
									</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Follow on Socal */}
			<section>
				<div className="bg-gradient-to-r from-accent to-accent-focus">
					<h3 className="text-4xl text-center p-4">Follow Me on Social</h3>
					<div className="flex justify-center space-x-2 text-gray-700">
					{/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
						<Link
							href="https://facebook.com/jaclynraeyoga"
							target="_blank"
						>
							<svg className="h-16 w-16 opacity-80 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
						</Link>
						<Link
							href="https://www.instagram.com/jaclynraeyoga/"
							target="_blank"
						>
							{/* <!-- Instagram --> */}
							{/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
							<svg className="h-16 w-16 opacity-80 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>					
						</Link>
					</div>
				</div>
			</section>

			{/* SCHEDULE */}
			<section>
				<div className="bg-white">
					<div className="container mx-auto">
					<h3 className="text-4xl text-center p-4">Classes I Teach</h3>
					<div className="flex md:flex-row content-between flex-col">
						<div className="card w-72 md:w-96 bg-base-100 shadow-xl mx-auto my-5 md:px-5">
							<figure><Image src={PrenatalYoga} alt="yoga hatha vinyasa flow" /></figure>
							<div className="card-body">
								<h2 className="card-title">Prenatal Group Classes</h2>
								<p>Connect with yourself, baby, and other pregnant mothers during this prenatal yoga class.</p>
								<div className="card-actions justify-end">
									<Link href="/classes"><button className="btn btn-primary">View Classes</button></Link>
								</div>
							</div>
						</div>
						<div className="card w-72 md:w-96 bg-base-100 shadow-xl mx-auto my-5 md:px-6">
							<figure><Image src={YogaPrivateLessons} alt="yoga hatha vinyasa flow" /></figure>
							<div className="card-body">
								<h2 className="card-title">Private Lessons</h2>
								<p>Get personalized instruction with in-person or virtual private lessons.</p>
								<div className="card-actions justify-end">
								<a href="mailto:jaclyn@jaclynraeyoga.com">
									<button className="btn btn-primary">Contact Me</button>
								</a>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</section>

			<OptInBottomBanner/ >
			{/* TODO: get a yoga quote for jaclyn so we have ano;ther section */}

			{/* Join the newsletter */}
			{/* TODO: implement a sign up form component */}
			{/* <section>
				<div className="bg-gradient-to-r from-accent to-accent-focus">
					<h3 className="text-4xl text-center p-4">Sign Up For My Newsletter</h3>
					<h5 className="text-xl text-center">Get the latest updates on what&apos;s happening with me and tips for your yoga practice.</h5>
					<div className="grid place-items-center p-4">
						<button className="btn btn-primary items-center">Newsletter Sign Up</button>
					</div>
				</div>
			</section> */}
		</>
	)
}
