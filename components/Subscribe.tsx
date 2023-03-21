

export default function Subscribe() {

	return (
		<>
			<div className="w-72 m-5">
				<h3 className="text-xl">Join the Newsletter</h3>
				<form action="/newsletter-sign-up" method="post">
					<div className="grid grid-rows-4">
						<input className="input input-bordered input-accent w-full max-w-xs my-1" id="firstname" name="firstName" placeholder="First Name" type="text"/>
						<input className="input input-bordered input-accent w-full max-w-xs my-1" id="lastname" name="lastName" placeholder="Last Name" type="text"/>
						<input className="input input-bordered input-accent w-full max-w-xs my-1" id="email" name="email" placeholder="Email *" required type="email"/>
						<button className="btn btn-primary w-28 m-1" type="submit">Subscribe</button>
					</div>
				</form>
			</div> 
		</>
	)
}