import { createContext } from "react";

const UserContext = createContext({ 
    user:{
        email: "",
        name: ""
    }
})

export default UserContext