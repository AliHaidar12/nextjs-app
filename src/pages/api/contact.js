// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name,email,phone, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'mail.closingcurtain.ae',
      port: 465,
      auth: {
        user: 'info@closingcurtain.ae',
        pass: '2%w13@1c1g11',
      },
    });

    // Configure email options
    const mailOptions = {
      from: 'wordpress@closingcurtain.ae',
      to: 'info@closingcurtain.ae',
      subject: 'Message From Closing Curtain',
      text: `Name: ${name}\nEmail: ${email}\nPhone No: ${phone}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
