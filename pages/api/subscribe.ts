// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

  const response = subscribe(subscriber)

  // res.status(200).write(response)

  res.status(200).json({ subscribed: true })
}

async function subscribe(subscriber: SubscriberProps) {

  console.log("subscribe recevied firstName: " + subscriber.firstName + ", " + " lastName: " + subscriber.lastName + ", " + " email: " + subscriber.email)
  console.log("list id: " + process.env.MAILCHIMP_LIST_ID)
  
  const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    email_address: subscriber.email,
    email_type: "html",
    merge_fields: {FNAME: subscriber.firstName, LNAME: subscriber.lastName},
    last_name: subscriber.lastName,
    status: "subscribed",
  });

  // const response = await mailchimp.lists.getAllLists();
  // console.log(response);
  console.log(JSON.parse(JSON.stringify(response)));
  // return response

}