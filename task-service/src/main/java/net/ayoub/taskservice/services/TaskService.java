package net.ayoub.taskservice.services;

import net.ayoub.taskservice.entities.Task;

import java.util.List;

public interface TaskService {
    Task getTask(Long taskId);
    List<Task> getTasks();
    Task saveTask(Task task);
    Task updateTask(Task task);
    void deleteTask(Long taskId);
    Task addTaskToProject(Long projectId, Long taskId);
}
