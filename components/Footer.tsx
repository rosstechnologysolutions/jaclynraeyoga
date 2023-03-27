import Link from 'next/link'

export default function Footer() {

	return (
		<>
			<footer className="footer footer-center p-4 bg-base-300 text-base-content mt-auto">
				<div className="flex flex-col">
					<p>Copyright © {new Date().getFullYear()} - All rights reserved by Jaclyn Ross | <Link href="/privacy">Privacy Policy</Link></p>
					<p>Site designed, built, and hosted by <Link href="https://rosstechnologysolutions.com" target="_blank">Ross Technology Solutions LLC</Link></p>
				</div>
			</footer>
		</>
	)
}