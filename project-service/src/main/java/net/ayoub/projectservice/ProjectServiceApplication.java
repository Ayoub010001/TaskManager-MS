package net.ayoub.projectservice;

import net.ayoub.projectservice.entities.Project;
import net.ayoub.projectservice.repositories.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
@EnableFeignClients
public class ProjectServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner init(ProjectRepository projectRepository) {
        return args -> {
//            String issuer_uri = System.getenv("KEYCLOAK_ISSUER_URI");
//            String jwk_uri = System.getenv("KEYCLOAK_JWK_URI");
//            System.out.println("KEYCLOAK_ISSUER_URI: " + issuer_uri);
//            System.out.println("KEYCLOAK_JWK_URI: " + jwk_uri);
            Project project1 = Project
                    .builder()
                    .projectName("Micro Service Project")
                    .projectDescription("Micro Service Project Description")
                    .accountId("aub1234")
                    .build();
            projectRepository.save(project1);
            Project project2 = Project
                    .builder()
                    .projectName("Agile Project")
                    .projectDescription("Agile Project Description")
                    .accountId("aub1234")
                    .build();

            projectRepository.save(project2);
        };
    }

}
