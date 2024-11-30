import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Button} from "@/components/ui/button.jsx";
import {Trash} from "lucide-react"
import {useState} from "react";
export default function DeleteTaskBtn({task, setTasks}){
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsDialogOpen(true);
        console.log("hello")
    }

    return <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="destructive"><Trash /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the task and remove its data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        {/* <AlertDialogAction variant="destructive" type="submit">Continue</AlertDialogAction> */}
                        <Button variant="destructive" type="submit">Continue</Button>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
}