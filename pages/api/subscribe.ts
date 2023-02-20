// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });
  

type Subscribe = {
    firstName: "string"
    lastname: "tring"
    email: "string"
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const body = req.body

  console.log("body: ", body)
  // console.log("first name: %d, last name: %d, email: %d", req.)

  subscribe()
  
  res.status(200).json({ subscribed: true })
}

async function subscribe(Data<Subscribe>) {
  const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    email_address: "foo@gmail.com",
    status: "subscribed",
  });

  // const response = await mailchimp.lists.getAllLists();
  console.log(response);
}