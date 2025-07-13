import React, { createContext } from "react";

export const userDataContext = createContext()

function UserContext({children}) {
    const URL ="https://ominous-umbrella-q7x5prgj4577fxpjr-7000.app.github.dev"
    const value = {
        URL
    }
    return (
       <div>
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    
       </div> 
    )

}
export default UserContext