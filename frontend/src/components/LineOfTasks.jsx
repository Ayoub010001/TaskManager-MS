import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Edit  } from "lucide-react"
import {Button} from "@/components/ui/button.jsx";

export default function LineOfTasks({headerTitle}){
    return (
        <article className="bg-gray-200 p-2 rounded-sm min-h-[80vh]">
            <header>
                <div className="bg-neutral-950 text-white rounded-sm p-2 flex items-center justify-center">
                    <h1>{headerTitle}</h1>
                </div>
            </header>
            <main className="p-2">
                <div>
                    <Card className="gap-0">
                        <CardHeader>
                            <CardTitle>
                                <span>Task #1</span>
                            </CardTitle>
                            <CardDescription>something small</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Task Description Task Description Task Description</p>
                        </CardContent>
                        <CardFooter>
                            <Button><Edit className="float-end"></Edit> Edit</Button>
                        </CardFooter>
                    </Card>
                </div>

            </main>
        </article>
    )
}