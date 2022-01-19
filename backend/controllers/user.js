import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {

  const { email, password } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email }); // find user with email

    if (!existingUser) return res.status(404).json({ message: "This user does not exist" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Credentials are not valid" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "There was an error" });
  }
};



export const signup = async (req, res) => {


  const { email, password, firstName, lastName, confirmPassword } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email }); // check user with email

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword) return res.status(400).json({ message: "Password does not match" }); 

    const hashedPassword = await bcrypt.hash(password, 12); 

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` }); // creates user

    const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );

    res.status(200).json({ result, token });
  } catch (error) {

    res.status(500).json({ message: "There was an erro" });
    
    console.log(error);

    
  }
};