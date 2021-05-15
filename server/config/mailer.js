const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
let serviceKey = require("../../credentials.json");

const oauth2Client = new OAuth2(
  serviceKey.client_id,
  serviceKey.client_secret, // Client Secret
);

oauth2Client.setCredentials({
  refresh_token: serviceKey.refresh_token
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "apptellyou@gmail.com", 
       clientId: serviceKey.client_id,
       clientSecret: serviceKey.client_secret,
       refreshToken: serviceKey.refresh_token,
       accessToken: accessToken,
       rejectUnauthorized: false
  }
});

const mailOptions = {
  from: "apptellyou@gmail.com", 
  to: "gustavodsf1@gmail.com",
  subject: "Hello World!",
  generateTextFromHTML: true,
  html: "<b>test APP! Vamos Time!</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});