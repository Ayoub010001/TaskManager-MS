package net.ayoub.userservice;

import net.ayoub.userservice.entities.Account;
import net.ayoub.userservice.repositories.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.UUID;

@SpringBootApplication
public class UserServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(AccountRepository accountRepository) {
        return args -> {
//            String issuer_uri = System.getenv("KEYCLOAK_ISSUER_URI");
//            String jwk_uri = System.getenv("KEYCLOAK_JWK_URI");
//            System.out.println("KEYCLOAK_ISSUER_URI: " + issuer_uri);
//            System.out.println("KEYCLOAK_JWK_URI: " + jwk_uri);

            Account aub = Account
                    .builder()
                    .id("aub1234")
                    .email("aub@aub.aub")
                    .username("aub")
                    .password(PasswordEncoder().encode("aub"))
                    .build();
            Account asmaa = Account
                    .builder()
                    .id("asmaa1234")
                    .email("asmaa@asmaa.asmaa")
                    .username("asma")
                    .password(PasswordEncoder().encode("asmaa"))
                    .build();
            Account oumaima = Account
                    .builder()
                    .id("oumaima1234")
                    .email("oumaima@oumaima.oumaima")
                    .username("oumaima")
                    .password(PasswordEncoder().encode("oumaima"))
                    .build();

            accountRepository.save(aub);
            accountRepository.save(asmaa);
            accountRepository.save(oumaima);
        };
    }

    @Bean
    public BCryptPasswordEncoder PasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
