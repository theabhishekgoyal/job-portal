import nodemailer from 'nodemailer';

const sendResetEmail = async (email, resetUrl) => {
  // Configure nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email optionsa
  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    text: `You are receiving this email because you requested a password reset. Please click the following link to reset your password: \n\n ${resetUrl}`,
  };

  await transporter.sendMail(options);
};

export default sendResetEmail;
