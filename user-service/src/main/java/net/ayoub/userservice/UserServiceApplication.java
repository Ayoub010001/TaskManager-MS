package net.ayoub.userservice;

import net.ayoub.userservice.entities.Account;
import net.ayoub.userservice.repositories.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
                    .email("aub@aub.aub")
                    .username("aub")
                    .password(PasswordEncoder().encode("aub"))
                    .build();
            Account asmaa = Account
                    .builder()
                    .email("asmaa@asmaa.asmaa")
                    .username("asma")
                    .password(PasswordEncoder().encode("asmaa"))
                    .build();
            Account oumaima = Account
                    .builder()
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
