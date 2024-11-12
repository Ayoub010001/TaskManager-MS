package net.ayoub.projectservice.entities;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Task {
    private Long taskId;
    private String taskName;
    private String taskDescription;
    @Enumerated(EnumType.STRING)
    private TaskStatus taskStatus;
    private Long projectId;
}
