import { useContext } from "react";
import "./MoreOptions-page.css"
import { SidebarLink } from "./ReusableComponents/Sidebar-link"
import { IoSettingsOutline } from "react-icons/io5";
import { LuActivitySquare,LuBookmark } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { TbMessageReport,TbBrandThreads } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./UseContex";

export const MoreOptions=() =>{
const navigate = useNavigate();

    const context = useContext(AppContext)
    const { state } = context
    
    const logoutHandler = () => {
        localStorage.removeItem("encodedToken");
        navigate("/login-page")
    };

    return(
        <div className="more-options-page-wrapper">
            <div className="moreOptions-page-links-wrapper">
 <SidebarLink icon={<IoSettingsOutline className="more-option-icon"/>}   linkName="Setting" />
                <SidebarLink icon={<LuActivitySquare className="more-option-icon"/>} linkName="Your activity"/>
                <SidebarLink icon={<LuBookmark className="more-option-icon"/>} linkName="Saved"/>
                <SidebarLink icon={< MdOutlineLightMode  className="more-option-icon" />} linkName="Switch appearance"/>
                <SidebarLink  icon={<TbMessageReport className="more-option-icon" />}linkName="Report a problem"/>
                <SidebarLink icon={<TbBrandThreads className="more-option-icon" />} linkName="Threads"/>
                <SidebarLink linkName="Switch accounts"/>
                <button onClick={()=> logoutHandler()}  className="l-sidebar-btn" >Log out</button>
            </div>
        </div>
    )
}