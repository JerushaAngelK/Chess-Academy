package com.example.project.backend.repositories;

import com.example.project.backend.models.offlineCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface offlineCoursesRepository extends JpaRepository<offlineCourses, Integer> {
}