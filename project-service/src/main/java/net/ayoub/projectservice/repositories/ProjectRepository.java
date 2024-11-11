package net.ayoub.projectservice.repositories;

import net.ayoub.projectservice.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
