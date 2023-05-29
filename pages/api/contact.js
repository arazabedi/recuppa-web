import nodemailer from "nodemailer";

// Have to add the user and pass to the .env file.
// Go on google application password (google it)
// Have to add backend validation using some library

export default async function ContactAPI(req, res) {
  const { email, subject, message } = req.body;

	const user = process.env.user;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
				from: user,
				to: "adam@zoeble.com",
				replyTo: email,
				subject: `Contact Form Submission from ${email}`,
				html:`
				<p>email: ${email}</p>
				<p>subject: ${subject}</p>
				<p>message: ${message}</p>
				`
		});

		console.log("message sent:", mail.messageId);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email.Your message was not sent.",
    });
  }

  return res.status(200).json({ message: "success" });
}
