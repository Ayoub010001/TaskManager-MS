import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import CreateDialogBtn from "@/components/CreateDialogBtn.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosProjects, axiosTasks} from "../axiosClient"


export default function AppSidebar(){

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axiosProjects.get("/projects").then(projects => {
                setProjects(projects.data);
        })
    },[])

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((item,key) => (
                                <SidebarMenuItem key={key}>
                                    <SidebarMenuButton asChild>
                                        <Link to={`/${item.projectId}`} aria-label={item.projectName}>
                                            <Settings />
                                            <span>{item.projectName}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                    <CreateDialogBtn setProjects={setProjects}/>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                we will add settings here
            </SidebarFooter>
        </Sidebar>
    )
}