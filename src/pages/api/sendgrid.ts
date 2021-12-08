import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: {
        email: "contato@q-rico.com.br",
        name: "Q-Rico",
      },
      from: "contato@q-rico.com.br",
      subject: `Q-Rico - Contato - ${req.body.name}`,
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
