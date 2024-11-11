package net.ayoub.userservice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String password;
}
