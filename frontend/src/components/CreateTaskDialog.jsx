import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { axiosTasks } from "../axiosClient";

export default function CreateTaskDialog({ projectId, setTasks }) {
  console.log(projectId)
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Controls dialog visibility
  const [newTask, setNewTask] = useState({
    taskName: "",
    taskDescription: "",
    taskStatus: "TO_DO",
    projectId: projectId,
  });

  const handleSubmit = (e) => {
     e.preventDefault();
    axiosTasks.post("/tasks",newTask).then(
      (resp) => setTasks(prevTasks => [...prevTasks, resp.data])
    )
    .then( () => setIsDialogOpen(false))
    .then(() => setNewTask({
                taskName: "",
                taskDescription: "",
                taskStatus: "TO_DO",
                projectId: projectId,
              }))
        
  };


  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button>
            <Plus />
            <span>Add Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Enter the name for your new task and Description.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                  Task Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  required
                  value={newTask.taskName}
                  onChange={(e) =>
                    setNewTask((prev) => ({
                      ...prev,
                      taskName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Task Description
                </Label>
                <Textarea
                  className="col-span-3"
                  required
                  value={newTask.taskDescription}
                  onChange={(e) =>
                    setNewTask((prev) => ({
                      ...prev,
                      taskDescription: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Task status
                </Label>
                <Select
                  value={newTask.taskStatus}
                  onValueChange={(value) =>
                    setNewTask((prev) => ({ ...prev, taskStatus: value }))
                  }
                  required
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TO_DO">To Do</SelectItem>
                    <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                    <SelectItem value="COMPLETED">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Add Task
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
