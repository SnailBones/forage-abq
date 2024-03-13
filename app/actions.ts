"use server";

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    const logFilePath = path.join(__dirname, "../../../../emails.log");

    function writeToFile(logMessage: string) {
        fs.appendFileSync(logFilePath, logMessage);
    }
    const logMessage = `${new Date().toISOString()} \n Name: ${name}, Email: ${email}, \n Message: ${message}\n`;
    writeToFile(logMessage);

    const mailOptions = {
        to: "cassowary4@gmail.com", // List of recipients
        subject: "Someone reached out on forageABQ.com",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
        html: `<b>Name:</b>${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`, // HTML body
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                writeToFile(
                    "email is " +
                        process.env.EMAIL +
                        " password is" +
                        process.env.PASSWORD +
                        "\n"
                );
                writeToFile(`Error sending email: ${error.toString()}\n\n`);
                reject(error);
            } else {
                console.log("Email sent: " + info.response);
                writeToFile(`Email sent: ${info.response}\n\n`);
                resolve(info); // Resolve the promise with the info object
            }
        });
    });
}
