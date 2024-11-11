package net.ayoub.projectservice.services;

import net.ayoub.projectservice.entities.Project;

import java.util.List;

public interface ProjectService {
    Project getProject(Long projectId);
    List<Project> getAllProjects();
}
