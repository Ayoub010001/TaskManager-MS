package net.ayoub.projectservice.web;

import net.ayoub.projectservice.entities.Account;
import net.ayoub.projectservice.entities.Project;
import net.ayoub.projectservice.services.ProjectService;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ProjectRestController {

    ProjectService projectService;

    public ProjectRestController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long projectId){
        Project project = projectService.getProject(projectId);
        if(project == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getAllProjects(){
        List<Project> projects = projectService.getAllProjects();
        if(projects == null){
            return ResponseEntity.notFound().build();
        }
        List<Project> projectsAndUser = projects
                .stream()
                .map(p -> projectService.getProject(p.getProjectId()))
                .toList();
        return ResponseEntity.ok(projectsAndUser);
    }

    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project){
        Project prj = projectService.createProject(project);
        return ResponseEntity.ok(prj);
    }

    @PutMapping("/projects")
    public ResponseEntity<Project> updateProject(@RequestBody Project project){
        Project prj = projectService.updateProject(project);
        return ResponseEntity.ok(prj);
    }

    @DeleteMapping("/projects/{projectId}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long projectId){
        projectService.deleteProject(projectId);
        return ResponseEntity.ok(null);
    }

    //Context of security
//    @GetMapping("/auth")
//    public Authentication getAuthentication(Authentication authentication){
//        return authentication;
//    }
}
