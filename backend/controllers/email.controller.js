import { Email } from '../models/email.model.js'

export const createEmail = async(req, res) => {
    try {
        const userId = req.id;
        const {to, subject, message} = req.body;
        
        if(!to || !subject || !message) {
            return res.status(400).json({message: "all fields are required", success: false});
        }

        const email = await Email.create({
            to, 
            subject,
            message,
            userId
        });

        return res.status(200).json({message: "email sent successfully", success: true ,email});
    }
    catch(error) {
        console.log(error);
    }
}

export const deleteEmail = async(req, res) => {
    try {
        const emailId = req.params.id;

        if(!emailId) {
            return res.status(400).json({message: "email does not exist", success: false});
        }

        const email = await Email.findOneAndDelete({emailId});
        if(!email) {
            return res.status(400).json({message: "email not found", success: false});
        }

        return res.send(200).json({message: 'email deleted successfully', success: true});
    }
    catch(error) {
        console.log(error);
    }
}

export const getAllEmail = async(req, res) => {
    try {
        const userId = req.id;
        const emails = await Email.find({userId});
        return res.status(200).json({emails});
    }
    catch(error) {
        console.log(error);
    } 
}