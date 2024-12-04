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
//            String issuer_uri = System.getenv("KEYCLOAK_ISSUER_URI");
//            String jwk_uri = System.getenv("KEYCLOAK_JWK_URI");
//            System.out.println("KEYCLOAK_ISSUER_URI: " + issuer_uri);
//            System.out.println("KEYCLOAK_JWK_URI: " + jwk_uri);

            Task prjService = Task
                    .builder()
                    .taskName("Service Project Rest Api")
                    .taskDescription("Create rest apis")
                    .taskStatus(TaskStatus.IN_PROGRESS)
                    .projectId(1L)
                    .build();
            Task taskService = Task
                    .builder()
                    .taskName("Service Task Rest Api")
                    .taskDescription("Create rest apis")
                    .taskStatus(TaskStatus.IN_PROGRESS)
                    .projectId(1L)
                    .build();
            Task userService = Task
                    .builder()
                    .taskName("Service User Rest Api")
                    .taskDescription("Create rest apis")
                    .projectId(2L)
                    .taskStatus(TaskStatus.TO_DO)
                    .build();

            taskRepository.save(prjService);
            taskRepository.save(userService);
            taskRepository.save(taskService);
        };
    }
}
