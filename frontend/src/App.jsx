import './App.css'
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar.jsx";
import AppTasks from "@/components/AppTasks.jsx";
import {useEffect} from "react";
import {axiosProjects, axiosTasks} from "@/axiosClient.js";

function App() {

    useEffect(() => {
        axiosProjects.get("/projects").then((projects)=>{
            console.log(projects.data)
        })
        axiosTasks.get("/tasks").then((tasks)=>{
            console.log(tasks.data)
        })
    }, []);

  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                <SidebarInset>
                    <AppTasks />
                </SidebarInset>
            </main>
        </SidebarProvider>
    </>
  )
}

export default App
