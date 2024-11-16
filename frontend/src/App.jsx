import './App.css'
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar.jsx";
import AppTasks from "@/components/AppTasks.jsx";

function App() {
  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <main>
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
