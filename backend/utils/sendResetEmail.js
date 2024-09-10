import nodemailer from 'nodemailer';
// import {globe} from './assets/globe.png'
const sendResetEmail = async (email, fullname, resetUrl) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
          <h2 style="color: #555;">Hello ${fullname || 'User'},</h2>
          <p>You are receiving this email because a request was made to reset your password.</p>
          <p>Please click the following link to reset your password:</p>
          <a href="${resetUrl}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 10px 20px; border-radius: 4px; text-decoration: none;">Reset Password</a>
          <br /><br />
          <p style="font-size: 12px; color: #999;">This is an automatically generated message. Please do not reply.</p>
          <br />
          <div style="font-size: 12px; color: #999; text-align: center;">
            <p>IIIT Bhagalpur, Bihar, India</p>
            <p>© 2024 CareerCue. All rights reserved.</p>
                      <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://abhishekgoyal.vercel.app" className="hover:text-gray-400" aria-label="Your Website">
              <Globe className='h-6 w-6' />
              <img src={globe}/>
            </a>
            <a href="https://instagram.com/agoyal0308">
              <FaInstagram className='h-6 w-6' />

            </a>

            <a href="https://twitter.com/agoyal0308" className="hover:text-gray-400" aria-label="Twitter">
              <X className='h-6 w-6' />
            </a>
            <a href="https://github.com/theabhishekgoyal/" className="hover:text-gray-400" aria-label="Github">
             <FaGithub className='h-6 w-6'/>
            </a>
            
            <a href="https://linkedin.com/in/agoyal0308" className="hover:text-gray-400" aria-label="LinkedIn">
              <Linkedin className='h-6 w-6' />

            </a>
          </div>
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(options);
};

export default sendResetEmail;
