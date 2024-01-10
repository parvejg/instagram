import "./MoreOptions-page.css"
import { SidebarLink } from "./ReusableComponents/Sidebar-link"
export const MoreOptions=() =>{
    return(
        <div className="more-options-page-wrapper">
            <div className="moreOptions-page-links-wrapper">
                <SidebarLink linkName="Setting"/>
                <SidebarLink linkName="Your activity"/>
                <SidebarLink linkName="Saved"/>
                <SidebarLink linkName="Switch appearance"/>
                <SidebarLink linkName="Report a problem"/>
                <SidebarLink linkName="Threads"/>
                <SidebarLink linkName="Switch accounts"/>
                <SidebarLink linkName="Log out"/>
            </div>
        </div>
    )
}