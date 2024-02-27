import express, { Request, Response } from "express";
import User, { IUser } from "../models/User"; 

const router = express.Router();


router.post("/", async (req: Request, res: Response) => {
  try {
    const { username, password, email, birthDate, country } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const parsedBirthday = new Date(birthDate); 

    const newUser: IUser = new User({ 
      username, 
      password, 
      email, 
      birthDate: new Date(birthDate), 
      country 
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


export default router;
