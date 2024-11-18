import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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

import { axiosProjects } from "../axiosClient";

export default function CreateDialogBtn({setProjects}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    projectName: "",
    projectDescription: "",
    accountId: 2,
    tasks:[]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosProjects.post("/projects",newProject).then(resp => setProjects(prev => [...prev,resp.data]))
    .then(()=> setIsDialogOpen(false))
    .then(()=> setNewProject({
        projectName: "",
        projectDescription: "",
        accountId: 2,
        tasks:[]
      }));
    console.log(newProject);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button>
            <Plus />
            <span>Create Project</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Enter the name for your new project and Description.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                  Project Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  value={newProject.projectName}
                  onChange={(e) =>
                    setNewProject((prev) => ({
                      ...prev,
                      projectName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Project Description
                </Label>
                <Textarea
                  className="col-span-3"
                  value={newProject.projectDescription}
                  onChange={(e) =>
                    setNewProject((prev) => ({
                      ...prev,
                      projectDescription: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Project Icon
                </Label>
                <Select
                  value={newProject.taskStatus}
                  onValueChange={(value) =>
                    setNewProject((prev) => ({ ...prev, taskStatus: value }))
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Icon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Gym</SelectItem>
                    <SelectItem value="dark">Work</SelectItem>
                    <SelectItem value="system">Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
