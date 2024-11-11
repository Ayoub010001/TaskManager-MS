package net.ayoub.taskservice.repositories;

import net.ayoub.taskservice.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
