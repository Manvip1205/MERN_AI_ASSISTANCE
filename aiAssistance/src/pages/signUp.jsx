import React, { useContext, useState } from "react";
import { IoEye } from "react-icons/io5"
import { IoEyeOff } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import bg from "../assets/authBg.png";
import { userDataContext } from "../contex/UserContext";
import axios from "axios"

function SignUp() {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { URL } = useContext(userDataContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = ("")

    const handleSignUp = async (e) => {
        e.preventDefault()
        setErr("")
        try {
            let result = await axios.post(`${URL}/api/auth/signup`,
                { name, email, password },
                { withCredentials: true }

            )
            console.log(result)
        } catch (error) {
            console.log(error)
            setErr(error.response.data.message)
        }

    }



    return (
        <div className='w-full bg-center h-screen bg-no-repeat flex justify-center items-center'
            style={{ backgroundImage: `url(${bg})` }}>
            <form className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center px-[20px] justify-center gap-[20px] "
                onSubmit={handleSignUp}>
                <h1 className="text-white text-[30px] font-semibold"
                >Register to <span className="text-blue-500" h1="text-blue-400">AI Assistant</span> </h1>

                <input type="text"
                    placeholder="enter your name"
                    className="w-full h-[60px] outline-none border-2 border-white px-[20px] py-[10px] rounded-full text-[18px] bg-transparent text-white placeholder-gray-300"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="text"
                    placeholder="enter your email"
                    className="w-full h-[60px] outline-none border-2 border-white px-[20px] py-[10px] rounded-full text-[18px] bg-transparent text-white placeholder-gray-300"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)

                    } />

                <div className="w-full relative h-[60px] outline-none border-2 border-white px-[20px] py-[10px] rounded-full bg-transparent">
                    <input
                        type={showPassword ? "text" : "password"}

                        placeholder="enter your password"
                        className="w-full h-full outline-none  px-[20px] py-[10px] rounded text-[18px] bg-transparent text-white placeholder-gray-300"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {!showPassword && <IoEye
                        className="absolute top-[20px] w-[25px] h-[25px] right-[20px] text-white "
                        onClick={() => setShowPassword(true)} />}
                    {showPassword && <IoEyeOff
                        className="absolute top-[20px] w-[25px] h-[25px] right-[20px] text-white"
                        onClick={() => setShowPassword(false)} />}

                </div>
               {err && err.length >0 && <p> {err} </p> } 
                <button
                    className="min-w-[150px] h-[60px] bg-white rounded-full text-black font-semibold text-90px"
                >
                    Sign Up
                </button>
                <p
                    className="text-white cursor-pointer text-[18px]" onClick={() => navigate("/login")}>already Have a Account ?
                    <span className="text-blue-950">Login</span></p>

            </form>


        </div>


    );
} export default SignUp