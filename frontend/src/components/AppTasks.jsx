import LineOfTasks from "@/components/LineOfTasks.jsx";
import CreateTaskDialog from "@/components/CreateTaskDialog.jsx";

export default function AppTasks(){
    return <main className="h-[100vh] w-full">
            <h1 className="text-2xl font-bold mb-4"># Project 1</h1>
            <div className="pb-2">
                <CreateTaskDialog />
            </div>
            <div className="w-full grid grid-cols-3 gap-2">
                <LineOfTasks headerTitle={"TO DO"}/>
                <LineOfTasks headerTitle={"IN PROGRESS"}/>
                <LineOfTasks headerTitle={"COMPLETED"}/>
            </div>
          </main>
}