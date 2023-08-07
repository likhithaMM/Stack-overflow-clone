import nodemailer from 'nodemailer';

async function Mailer(otp) {
  const mailTransporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: 'gmail',
    port: Number(process.env.EMAIL_PORT),
    secure: Boolean(process.env.SECURE),
    auth: {
      user: process.env.USER,
      pass: 'xtxylwjnkunmccrg',
    },
  });

  const mailDetails = {
    from: 'likhithamedisetty22@gmail.com',
    to: otp.email,
    subject: 'OTP For Authentication Stackoverflow Chatbot',
    text: JSON.stringify(otp.otp),
  };

  return new Promise((resolve, reject) => {
    mailTransporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log('Error Occurs', error);
        reject(error);
      } else {
        console.log('Email sent successfully');
        resolve(info);
      }
    });
  });
}

export default Mailer;
