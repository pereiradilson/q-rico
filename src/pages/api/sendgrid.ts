import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: {
        email: `${process.env.TO_EMAIL_CONTACT}`,
        name: `${process.env.TO_NAME_CONTACT}`,
      },
      from: {
        email: `${process.env.FROM_EMAIL_CONTACT}`,
        name: `${process.env.FROM_NAME_CONTACT}`,
      },
      subject: `Q-Rico | Contato - ${req.body.name}`,
      html: `<div>
        <p>Dados de contato:</p>
        <p>Nome: ${req.body.name}</p>
        <p>E-mail: ${req.body.email}</p>
      </div>`,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
