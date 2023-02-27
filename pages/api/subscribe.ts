// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
		apiKey: process.env.MAILCHIMP_API_KEY,
		server: process.env.MAILCHIMP_SERVER_PREFIX,
	});
	

type SubscriberProps = {
	email: string,
	firstName: string,
	lastName: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

		const subscriber: SubscriberProps = JSON.parse(JSON.stringify(req.body));
	
		console.log(subscriber)
	
		subscribe(subscriber).then((response) =>{
			console.log(response.status)
		});
	
		// res.status(200).write(response)
	
		res.status(200).json({ subscribed: true })
	}

async function subscribe(subscriber: SubscriberProps) {
	const response = await fetch ('https://' + process.env.MAILCHIMP_SERVER_PREFIX + '.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/', {
		body: JSON.stringify({
			'email_address': subscriber.email,
			'status': 'subscribed',
			'merge_fields': {
				'FNAME': subscriber.firstName,
				'LNAME': subscriber.lastName
			}
		}),
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			"Authorization": "Basic " + new Buffer('any:' + process.env.MAILCHIMP_API_KEY ).toString('base64')
		},
		method: "POST",
	});

	// console.log(response.json)
	return response.json();

	// .then((response) => response.json())
	// .then((json) => console.log(json))
};

// const subscribe = (subscriber: SubscriberProps) => {
// 	const response = fetch ('https://' + process.env.MAILCHIMP_SERVER_PREFIX + '.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/', {
// 		body: JSON.stringify({
// 			'email_address': subscriber.email,
// 			'status': 'subscribed',
// 			'merge_fields': {
// 				'FNAME': subscriber.firstName,
// 				'LNAME': subscriber.lastName
// 			}
// 		}),
// 		headers: {
// 			"Content-Type": "application/json;charset=utf-8",
// 			"Authorization": "Basic " + new Buffer('any:' + process.env.MAILCHIMP_API_KEY ).toString('base64')
// 		},
// 		method: "POST",
// 	})

// 	.then((response) => response.json())
// 	.then((json) => console.log(json))
// };

