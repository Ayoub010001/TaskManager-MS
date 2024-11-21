package net.ayoub.taskservice.web;

import net.ayoub.taskservice.entities.Task;
import net.ayoub.taskservice.services.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskRestController {

    TaskService taskService;

    public TaskRestController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks/{taskId}")
    public ResponseEntity<Task> getTask(@PathVariable Long taskId){
        Task task = taskService.getTask(taskId);
        if(task == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(task);
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getTasks(){
        List<Task> tasks = taskService.getTasks();
        if(tasks == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/tasks/project/{projectId}")
    public ResponseEntity<List<Task>> getTasksByPrjId(@PathVariable Long projectId){
        List<Task> tasks = taskService.getTasksByProjectId(projectId);
        if(tasks == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tasks);
    }

    @PostMapping("/tasks")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        Task task1 = taskService.saveTask(task);
        if(task1 == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(task1);
    }

    @PutMapping("/tasks")
    public ResponseEntity<Task> UpdateTask(@RequestBody Task task){
        Task task1 = taskService.updateTask(task);
        if(task1 == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(task1);
    }

    @DeleteMapping("/tasks/{taskId}")
    public ResponseEntity<Void> DeleteTask(@PathVariable Long taskId){
        taskService.deleteTask(taskId);
        return ResponseEntity.noContent().build();
    }

}
