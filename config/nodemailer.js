import nodemailer from "nodemailer"
import {EMAIL, EMAIL_PASSWORD} from "./env.js"

export const accountEmail = EMAIL;

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    }
})

export default transporter;