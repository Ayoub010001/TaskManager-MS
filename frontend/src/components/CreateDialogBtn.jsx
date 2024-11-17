import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CreateDialogBtn(){
    return <>
        <Dialog>
            <DialogTrigger>
                <Button>
                    <Plus />
                    <span>Create Project</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create Project
                    </DialogTitle>
                    <DialogDescription>
                        Enter the name for your new project and Description.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Project Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="New Task"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-left">
                            Project Description
                        </Label>
                        <Textarea className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-left">
                            Project Icon
                        </Label>
                        <Select>
                            <SelectTrigger>
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
                    <Button type="submit">
                        Create Project
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    </>
}