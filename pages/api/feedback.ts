import type { NextApiRequest, NextApiResponse } from "next";
// import { render } from "@react-email/render";
// import FeedBackEmail from "../../emails/FeedbackTemplate";
// import { sendEmail } from "../../lib/email";

// const recipients = [
//   "ijiyun.yang@gmail.com",
//   "mikcczhang@gmail.com",
//   "hu-beau@outlook.com",
//   "andyclouz.sun@gmail.com"
// ]

import { WebClient } from '@slack/web-api';

const slackToken = process.env.SLACK_TOKEN;
const conversationId = process.env.CONVERSATION_ID;
const web = new WebClient(slackToken);

const token = process.env.TOKEN;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    if (req.headers.token === token && !!email && !!message) {
      try {
        const blocks = [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `Hey <!here|here>, a feedback is received from one of FeatBit users \`${email}\` 😄 \n>${message}\n>`
            }
          }
        ];

        await web.chat.postMessage({
          blocks,
          "text": `Hey, a feedback is received from one of FeatBit users \`${email}\` with the message ${message}`,
          channel: conversationId,
        });
        //     We are not sending email for now
        //     await sendEmail({
        //       to: recipients,
        //       subject: "FeatBit Feedback!!",
        //       html: render(FeedBackEmail({email, message})),
        //     });

        return res.status(200).json({ success: true, data: { message: `Successfully send message`} });
      } catch (e) {
        res.status(500).end();
      }
    }

    res.status(400).end();
  } else if (req.method === 'OPTIONS'){
    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
