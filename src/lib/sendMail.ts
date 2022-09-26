// import nodemailer from "nodemailer";
// import { config } from "dotenv";

// interface IMailTemplate {
//   subject: string;
//   to: string;
//   from?: string;
//   text: any;
// }
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "chukwuemekachemazu@gmail.com",
//     pass: "RATface_123!"
//   },
// });
// config();
// console.log(process.env.NODEMAILER_USER);
// // const mailOptions = {
// //   from: "The Idea project",
// //   to: " ",
// //   subject: "My first Email!!!",
// //   text: "This is my first email. I am so excited!",
// // };
//    const sendMail = async (mailTemplate: IMailTemplate) => {
//     const { from, to, subject, text } = mailTemplate;
//     const mailOptions = {
//         from,
//         to,
//         subject,
//         text,
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//         console.log(error);
//         } else {
//         console.log("Email sent: " + info.response);
//         }
//     }),
//         (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//         }
// }
// export default sendMail;