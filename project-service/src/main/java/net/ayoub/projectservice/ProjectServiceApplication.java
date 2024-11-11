package net.ayoub.projectservice;

import net.ayoub.projectservice.entities.Project;
import net.ayoub.projectservice.repositories.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProjectServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner init(ProjectRepository projectRepository) {
        return args -> {
            Project project1 = Project
                    .builder()
                    .projectName("Micro Service Project")
                    .projectDescription("Micro Service Project Description")
                    .build();
            projectRepository.save(project1);
            Project project2 = Project
                    .builder()
                    .projectName("Agile Project")
                    .projectDescription("Agile Project Description")
                    .build();

            projectRepository.save(project2);
        };
    }

}
