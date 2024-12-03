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
