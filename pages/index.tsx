import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Inter } from '@next/font/google'

import Jaclyn from "../public/jaclyn.webp"
import YogaFlow from "../public/yogaFlow.jpg"
import PrenatalYoga from "../public/prenatalYoga.jpg"
import YogaClass from "../public/yogaClass.jpg"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Jaclyn Rae Yoga | Home</title>
			</Head>
			{/* HERO */}
			<section>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row">
						<Image
							alt="picture of Jaclyn the yoga teacher"
							className="max-w-sm rounded-lg shadow-2xl"
							src={Jaclyn}
						>
						</Image>
						<div>
							<h1 className="text-5xl font-bold">Meet Your Yoga Teacher</h1>
							<p className="py-6 text-xl">Hi, I&apos;m Jaclyn. I have a passion for yoga and helping others get moving on their mat. Yoga has changed my life and I think it can change yours. Click below to learn more about my experience and certifications or to sign up for my newsletter.</p>
							<Link href="/about">
								<button className="btn btn-primary mr-2">About Me</button>
							</Link>
							{/* The button to open modal */}
							<label htmlFor="my-modal" className="btn btn-secondary">NewsLetter Sign Up</label>

							{/* Put this part before </body> tag */}
							<input type="checkbox" id="my-modal" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box">
									<h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
									<p className="py-4">You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
									<div className="modal-action">
										<label htmlFor="my-modal" className="btn">Yay!</label>
									</div>
								</div>
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
						<Link
							href="https://www.facebook.com/jaclynraeyoga/"
							target="_blank"
						>
							<div className="h-16 w-16 m-2">
							{/* <!-- Instagram --> */}
							{/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full h-full"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>						
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* SCHEDULE */}
			<section>
				<div className="bg-white">
					<div className="container mx-auto">
					<h3 className="text-4xl text-center p-4">See Where I&apos;m Teaching Next</h3>
					<div className="flex md:flex-row flex-col">
						<div className="card w-72 md:w-96 bg-base-100 shadow-xl m-10">
							<figure><Image src={YogaFlow} alt="yoga hatha vinyasa flow" /></figure>
							<div className="card-body">
								<h2 className="card-title">Hatha Vinyasa Flow</h2>
								<p></p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Learn More</button>
								</div>
							</div>
						</div>
						<div className="card w-72 md:w-96 bg-base-100 shadow-xl m-10">
							<figure><Image src={PrenatalYoga} alt="yoga hatha vinyasa flow" /></figure>
							<div className="card-body">
								<h2 className="card-title">Prenatal</h2>
								<p>Connect with yourself, baby, and other pregnant mothers during this prenatal yoga class.</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Learn More</button>
								</div>
							</div>
						</div>
						<div className="card w-72 md:w-96 bg-base-100 shadow-xl m-10">
							<figure><Image src={YogaClass} alt="yoga hatha vinyasa flow" /></figure>
							<div className="card-body">
								<h2 className="card-title">Workshops</h2>
								<p></p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Learn More</button>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</section>

			{/* TODO: get a yoga quote for jaclyn so we have ano;ther section */}

			{/* Join the newsletter */}
			{/* TODO: implement a sign up form component */}
			<section>
				<div className="bg-gradient-to-r from-accent to-accent-focus">
					<h3 className="text-4xl text-center p-4">Sign Up For My Newsletter</h3>
					<h5 className="text-xl text-center">Get the latest updates on what&apos;s happening with me and tips for your yoga practice.</h5>
					<div className="grid place-items-center p-4">
						<button className="btn btn-primary items-center">Newsletter Sign Up</button>
					</div>
				</div>
			</section>
		</>
	)
}
