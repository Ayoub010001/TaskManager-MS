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
import { Calendar, Home, Inbox, Search, Settings ,User ,Plus  } from "lucide-react"
import {Button} from "@/components/ui/button.jsx";


export default function AppSidebar(){
    // Menu items.
    const items = [
        {
            title: "Project 1",
            url: "#",
            icon: Home,
        },
        {
            title: "Project 2",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Project 3",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Project 4",
            url: "#",
            icon: Search,
        },
        {
            title: "Project 5",
            url: "#",
            icon: Settings,
        },
    ]
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Button className="w-full">
                                        <Plus />
                                        <span>Create Project</span>
                                    </Button>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                    <SidebarMenuButton asChild>
                        <Button href="#">
                            <User></User>
                            <span>Profile</span>
                        </Button>
                    </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    )
}