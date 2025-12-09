import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,};
        
    const [user,setUser] = useState(null);
    const [isSeller,setIsSeller] = useState(null);
    const [showUserLogin,setShowUserLogin] = useState(false);

    return (
        <AppContext.Privder value={value}>
            {children}
        </AppContext.Privder>
    );
};

export default AppContextProvider;