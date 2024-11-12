package net.ayoub.projectservice.restClient;

import net.ayoub.projectservice.entities.Account;
import net.ayoub.projectservice.entities.Task;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "TASK-SERVICE")
public interface TaskRestClient {
    @GetMapping(path = "/api/tasks/{taskId}")
    Task getTask(@PathVariable("taskId") Long taskId);

    @GetMapping(path="/api/tasks/project/{projectId}")
    List<Task> getTasksByProject(@PathVariable("projectId") Long projectId);
}
