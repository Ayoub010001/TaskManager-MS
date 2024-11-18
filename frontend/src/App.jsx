import "./App.css";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar.jsx";
import AppTasks from "@/components/AppTasks.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <Routes>
        <Route path="/" element={<AppTasks />} />
        <Route path="/:id" element={<AppTasks />} />
      </Routes>
    </SidebarProvider>
  );
}

export default App;
