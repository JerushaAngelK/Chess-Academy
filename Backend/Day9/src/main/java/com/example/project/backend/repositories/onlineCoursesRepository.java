package com.example.project.backend.repositories;

import com.example.project.backend.models.onlineCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface onlineCoursesRepository extends JpaRepository<onlineCourses, Integer> {
}