import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp = async (req,res) =>{
    try {
        const{name,email,password } = req.body

       const existingEmail = await User.findOne({email})

       if (existingEmail){
        return res.status(400).json({message : " email already existed "})
       }
        if (password.length<6){
            return res.status(400).json ({message:"password need 6 caracter"})
       }

    const hashedPassword = await bcrypt.hash(password ,10)

    const user = await User.create({
        name, password:hashedPassword,email
    })
    
    const token = await genarateToken(user._id)

    res.cookie("token",token,{
        httpOnly : true,
        maxAag : 15*24*60*60*1000,
        sameSite: "strict",
        secure: false
    })
    } catch (error) {
        return res.status(500).json({message: "plese try again sorry for signup"})
    }
}