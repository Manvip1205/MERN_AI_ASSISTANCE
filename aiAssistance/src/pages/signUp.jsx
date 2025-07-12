import React from "react";
import bg from "../assets/authBg.png";

function SignUp() {
    return (<div className='w-full h-[100vh] bg-cover flex justify-center items-center'
     style={{ backgroundImage: `url(${bg})` }}>
        <form className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center px-[20px] justify-center gap-[20px] ">
            <h1 className="text-white text-[30px] font-semibold"
            >Register to <span className="text-blue-400">AI Assistant</span> </h1>

            <input type="text" placeholder="enter your name" className="w-full h-[60px] outline-none border-2 border-white px-[20px] py-[10px] rounded text-[18px] bg-transparent text-white placeholder-gray-300"/>



        </form>
    

    </div>

    );
} export default SignUp