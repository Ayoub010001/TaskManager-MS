import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import UpdateTaskBtn from "@/components/UpdateTaskBtn.jsx";
import DeleteTaskBtn from "@/components/DeleteTaskBtn.jsx";

// eslint-disable-next-line react/prop-types
export default function LineOfTasks({ headerTitle, tasks ,setTasks }) {

  let tasksFiltered = [];
  if(headerTitle === "TO DO"){
    tasksFiltered = tasks.filter((task) => task.taskStatus == "TO_DO")
  }
  if(headerTitle === "IN PROGRESS"){
    tasksFiltered = tasks.filter((task) => task.taskStatus == "IN_PROGRESS")
  }
  if(headerTitle === "COMPLETED"){
    tasksFiltered = tasks.filter((task) => task.taskStatus == "COMPLETED")
  }

  console.log("Tasks")
  console.log(tasks)

  return (
    <article className="bg-gray-200 p-2 rounded-sm min-h-[80vh]">
      <header>
        <div className=" text-neutral-500 text-lg font-semibold rounded-sm p-2 flex items-center justify-center">
          <h1>{headerTitle}</h1>
        </div>
      </header>
      <main className="p-2">
        <div className="flex flex-col gap-2">
          {tasksFiltered.map((task, key) => {
            return (
              <Card className="gap-0 p-2" key={key}>
                <CardHeader className="p-2">
                  <CardTitle className="text-lg">
                    {task.taskName}
                  </CardTitle>
                  <CardDescription>{task.taskStatus}</CardDescription>
                </CardHeader>
                <CardFooter className="px-2 py-0 flex gap-2">
                  <UpdateTaskBtn task={task} setTasks={setTasks}/>
                  <DeleteTaskBtn task={task} setTasks={setTasks}/>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </article>
  );
}
