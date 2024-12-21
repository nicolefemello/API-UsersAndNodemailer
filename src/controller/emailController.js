import nodemailer from "nodemailer";
import SMTP from "../config/smtp.js";
import { text } from "express";

class emailController {
  static async sendEmail(req, res, { to, subject, message }) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: SMTP.from,
          pass: SMTP.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const emailSent = await transporter
        .sendMail({
          from: SMTP.from,
          to: "",
          subject: "",
          text: "",
        })
        .then((res) => console.log("E-mail enviado com sucesso!"))
        .catch((error) => console.error("Erro ao enviar e-mail"));

        res.status(200).send("Email enviado com sucesso!");
    } catch (error) {
        res.status(500).send("Não foi possível enviar o email");
    }
  }
}

export default emailController;
