
import Link from 'next/link'

export default function ClassScheduleCallToAction() {
  return (
    <>
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
    </>
  )
}