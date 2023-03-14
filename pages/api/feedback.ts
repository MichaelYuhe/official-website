import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import FeedBackEmail from "../../emails/FeedbackTemplate";
import { sendEmail } from "../../lib/email";

const token = "uxeizS3tlCXRKLOi4GPtAU1OcVl3RkDR54HKlbt7tVZGaWTtmvfZYheQDUGLr4troWdksluYijZHGDKB";

const recipients = [
  "ijiyun.yang@gmail.com",
  "mikcczhang@gmail.com",
  "hu-beau@outlook.com",
  "andyclouz.sun@gmail.com"
]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    if (req.headers.token === token && !!email && !!message) {
      try {
        await sendEmail({
          to: recipients,
          subject: "FeatBit Feedback!!",
          html: render(FeedBackEmail({email, message})),
        });

        return res.status(200).json({ success: true, data: { message: "Feedback sent successfully"} });
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
