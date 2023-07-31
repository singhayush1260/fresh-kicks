import { createContext, useState } from "react";

const DashboardContext=createContext();

const DashboardContextProvider=({children})=>{

const[showDashboard, setShowDashboard]=useState(true);

const handleShowDashboard=()=>{
    setShowDashboard(!showDashboard);
}
    return(
        <DashboardContext.Provider value={{showDashboard, handleShowDashboard}}>
            {children}
        </DashboardContext.Provider>
    )
}
export {DashboardContext, DashboardContextProvider};