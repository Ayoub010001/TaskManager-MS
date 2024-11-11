package net.ayoub.projectservice.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long projectId;
    private String projectName;
    private String projectDescription;
    private Long accountId;
    @Transient
    private Account account;
}
