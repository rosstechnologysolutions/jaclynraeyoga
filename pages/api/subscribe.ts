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

// default function for the handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {

		const subscriber: SubscriberProps = JSON.parse(JSON.stringify(req.body));
	
		console.log("attempting to subscribe: " + subscriber)
	
		subscribe(subscriber).then((response) => {

			if (response.status != 'subscribed') {
				
				const splitError = response.detail.split(". ")

				let dateTime = new Date()
				console.log(dateTime + " error: " + response.detail)
			
				res.status(400).json({ message: splitError[0]})
			
				return
			}

			let dateTime = new Date()
			console.log(dateTime + " success. subscribed: " + subscriber.email)
			
			res.status(200).json({ message: "subscribed" })
			
			return
		});
	}

// subscribe the passed user to the mailchimp list
// shout out to this article for the help - https://www.codementor.io/@mattgoldspink/integrate-mailchimp-with-nodejs-app-du10854xp
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

	return response.json();
};