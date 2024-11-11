package net.ayoub.projectservice.web;

import net.ayoub.projectservice.entities.Project;
import net.ayoub.projectservice.services.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ProjectRestController {

    ProjectService projectService;

    public ProjectRestController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long projectId){
        Project project = projectService.getProject(projectId);
        if(project == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }

    @GetMapping("/project")
    public ResponseEntity<List<Project>> getAllProjects(){
        List<Project> project = projectService.getAllProjects();
        if(project == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }
}
