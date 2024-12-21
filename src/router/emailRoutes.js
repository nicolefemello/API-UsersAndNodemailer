import emailController from '../controller/emailController.js';

const emailRoutesInit = (app) => {
    app.post("/send", emailController.sendEmail);
}

export default emailRoutesInit;