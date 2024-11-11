package net.ayoub.taskservice.services;

import net.ayoub.taskservice.entities.Task;

import java.util.List;

public interface TaskService {
    Task getTask(Long taskId);
    List<Task> getTasks();
    Task saveTask(Task task);
}