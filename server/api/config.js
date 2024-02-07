import { createTransport } from "nodemailer";
import { config } from "dotenv";
config();
const transporter = createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
    auth:{
        user:"jayantthakur108@gmail.com",
        pass:process.env.SMTPKEY
    }
});
export const sendEmail = (name,email,res)=>{
    const mailOptions = {
        from:"Jayant061@gmail.com",
        to:email,
        subject:"Thank You",
        text:`Name: ${name}\n Message: Thank you for your Subscription!`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            res.sendStatus(404);
        }else{
            res.sendStatus(200);
        }
    })
}