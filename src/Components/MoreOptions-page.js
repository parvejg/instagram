import "./MoreOptions-page.css"
import { SidebarLink } from "./ReusableComponents/Sidebar-link"
import { IoSettingsOutline } from "react-icons/io5";
import { LuActivitySquare,LuBookmark } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { TbMessageReport,TbBrandThreads } from "react-icons/tb";
export const MoreOptions=() =>{
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
                <SidebarLink linkName="Log out"/>
            </div>
        </div>
    )
}