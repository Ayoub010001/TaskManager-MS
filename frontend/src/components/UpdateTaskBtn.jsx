import {Button} from "@/components/ui/button.jsx";
import {Edit, Plus} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {useState} from "react";
import {axiosTasks} from "@/axiosClient.js";

export default function UpdateTaskBtn({task, setTasks}){
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosTasks.put("/tasks",newTask).then( resp => {
            console.log(resp.data)
            setTasks(prevTasks => {
                return prevTasks.map((task) => {
                    if(task.taskId === resp.data.taskId){
                        return resp.data
                    }
                    return task
                })

            })
        })
        setIsDialogOpen(false)


    };

    return <>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger>
                    <Button>
                        <Edit></Edit> Edit
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Task</DialogTitle>
                        <DialogDescription>
                            Update you Task.
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
                                Update Task
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
    </>
}