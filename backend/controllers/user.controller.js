import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "all fields are required", success: false});
        }

        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "user already exists", success: false});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            image: 'https://avatar.iran.liara.run/public/boy'
        });

        return res.status(201).json({message: "Account created successfully!", success: true});
    }
    catch(error) {
        console.log(error);
    }
}

export const loginUser = async(req , res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "all fields are required", success: false});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({message: "incorrect email or password", success: false});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(401).json({message: "incorrect email or password", success: false});
        }

        const tokenPayload = {
            userId: user._id
        }

        const token = await jwt.sign(tokenPayload, process.env.SECRET_KEY, {expiresIn: '1d'});

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: 'strict'}).json({
            message: `${user.name} logged in successfully`,
            success: true,
            user: user
        });
    }
    catch(error) {
        console.log(error);
    }
}

export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "user logged out successfully",
            success: true
        });
    }
    catch(error) {
        console.log(error);
    }
}