package net.ayoub.taskservice;

import net.ayoub.taskservice.entities.Task;
import net.ayoub.taskservice.entities.TaskStatus;
import net.ayoub.taskservice.repositories.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TaskServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(TaskRepository taskRepository) {
        return args -> {
            Task prjService = Task
                    .builder()
                    .taskName("Service Project Rest Api")
                    .taskDescription("Create rest apis")
                    .taskStatus(TaskStatus.IN_PROGRESS)
                    .build();
            Task taskService = Task
                    .builder()
                    .taskName("Service Task Rest Api")
                    .taskDescription("Create rest apis")
                    .taskStatus(TaskStatus.IN_PROGRESS)
                    .build();
            Task userService = Task
                    .builder()
                    .taskName("Service User Rest Api")
                    .taskDescription("Create rest apis")
                    .taskStatus(TaskStatus.TO_DO)
                    .build();

            taskRepository.save(prjService);
            taskRepository.save(userService);
            taskRepository.save(taskService);
        };
    }
}
