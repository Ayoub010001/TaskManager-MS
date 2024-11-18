import LineOfTasks from "@/components/LineOfTasks.jsx";
import CreateTaskDialog from "@/components/CreateTaskDialog.jsx";
import {
    SidebarInset,
  } from "@/components/ui/sidebar";
import { useParams } from "react-router-dom";
import { axiosProjects, axiosTasks} from "../axiosClient"
import { useEffect, useState } from "react";

export default function AppTasks() {
    const projectId = useParams();
    let id = projectId.id?projectId.id:1;
    const [tasks, setTasks] = useState([]);

    //TODO Fetch Tasks based on ProjectId
    useEffect(()=>{
        let uri = "/tasks/project/"+id;
        axiosTasks.get(uri).then(tasks => {
            console.log(tasks.data)
            setTasks(tasks.data);
        }).catch((error) => {
          console.error("Error while adding a task:", error);
          setTasks([]);
        });
    },[projectId])

    //Pass data to lineOfTasks Components

  return (
    // <SidebarInset>
      <main className="h-[100vh] w-full">
        <h1 className="text-2xl font-bold mb-4">Project {id}</h1>
        <div className="pb-2">
          <CreateTaskDialog projectId={projectId.id} setTasks={setTasks}/>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          <LineOfTasks headerTitle={"TO DO"} tasks={tasks} setTasks={setTasks}/>
          <LineOfTasks headerTitle={"IN PROGRESS"} tasks={tasks}  setTasks={setTasks}/>
          <LineOfTasks headerTitle={"COMPLETED"} tasks={tasks}  setTasks={setTasks}/>
        </div>
      </main>
    // </SidebarInset>
  );
}
