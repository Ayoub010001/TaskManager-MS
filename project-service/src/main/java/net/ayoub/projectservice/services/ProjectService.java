package net.ayoub.projectservice.services;

import net.ayoub.projectservice.entities.Account;
import net.ayoub.projectservice.entities.Project;

import java.util.List;

public interface ProjectService {
    Project getProject(Long projectId);
    List<Project> getAllProjects();
    Project createProject(Project project);
    Project updateProject(Project project);
    void deleteProject(Long projectId);
}
