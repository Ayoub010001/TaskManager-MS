package net.ayoub.taskservice.entities;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Project {
    private Long projectId;
    private String projectName;
    private String projectDescription;
    private Long accountId;
}
