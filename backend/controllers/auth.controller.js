import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genarateToken from "../utils/jwtToken.js"

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

    return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message: "plese try again sorry for signup"})
    }
}
export const Login = async (req,res) =>{
    try {
        const{email,password } = req.body

       const user = await User.findOne({email})

       if (!user){
        return res.status(400).json({message : " User not found .....please sign up "})
       }
    
       const isMatch = await bcrypt.compare(password , user.password)
       if (!isMatch){
        return res.status(400).json({message:"password incorrect"}) 
       }
    const token = await genarateToken(user._id)

    res.cookie("token",token,{
        httpOnly : true,
        maxAag : 15*24*60*60*1000,
        sameSite: "strict",
        secure: false
    })
    return res.status(200).json('welcome sirji' )
    } 
    catch (error) {
        return res.status(500).json({message: "sorry"})
    }
}

export const logOut = async (req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json('by by ${user.name}... i miss you')
    } catch (error) {
        return res.status(500).json("something wrong")
    }
}
