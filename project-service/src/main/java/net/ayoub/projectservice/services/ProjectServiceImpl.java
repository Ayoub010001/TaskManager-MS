package net.ayoub.projectservice.services;

import net.ayoub.projectservice.entities.Account;
import net.ayoub.projectservice.entities.Project;
import net.ayoub.projectservice.entities.Task;
import net.ayoub.projectservice.repositories.ProjectRepository;
import net.ayoub.projectservice.restClient.AccountRestClient;
import net.ayoub.projectservice.restClient.TaskRestClient;
//import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final AccountRestClient accountRestClient;
    private final TaskRestClient taskRestClient;

    public ProjectServiceImpl(ProjectRepository projectRepository, AccountRestClient accountRestClient, TaskRestClient taskRestClient) {
        this.projectRepository = projectRepository;
        this.accountRestClient = accountRestClient;
        this.taskRestClient = taskRestClient;
    }

    @Override
    public Project getProject(Long projectId) {
        Project project = projectRepository.findById(projectId).orElse(null);
        Account account = accountRestClient.getAccount(project.getAccountId());
        List<Task> tasks = taskRestClient.getTasksByProject(project.getProjectId());
        project.setAccount(account);
        project.setTasks(tasks);
        return project;
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project createProject(Project project) {
        Account account = accountRestClient.getAccount(project.getAccountId());
        project.setAccount(account);
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }
}
