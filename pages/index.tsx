import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Inter } from '@next/font/google'

import Jaclyn from "../public/jaclyn.webp"
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
              <p className="py-6 text-xl">Hi, I'm Jaclyn. I have a passion for yoga and helping others get moving on their mat. Yoga has changed my life and I think it can change yours. Click below to learn more about my experience and certifications.</p>
              <Link href="/about">
                <button className="btn btn-primary">About Me</button>
              </Link>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}
