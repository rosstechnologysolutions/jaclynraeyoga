

export default function Subscribe() {

  return (
    <>
      <div>
				<form action="/api/subscribe" method="post">
					<div className="grid grid-rows-4 w-72">
						<input className="input input-bordered input-accent w-full max-w-xs" id="firstname" name="firstName" placeholder="First Name" type="text"/>
						<input className="input input-bordered input-accent w-full max-w-xs" id="lastname" name="lastName" placeholder="Last Name" type="text"/>
						<input className="input input-bordered input-accent w-full max-w-xs" id="email" name="email" placeholder="Email *" required type="email"/>
						<button className="btn btn-primary w-28" type="submit">Subscribe</button>
					</div>
				</form>
			</div> 
    </>
  )
}