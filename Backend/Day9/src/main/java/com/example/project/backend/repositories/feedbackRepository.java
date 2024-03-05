package com.example.project.backend.repositories;

import com.example.project.backend.models.feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface feedbackRepository extends JpaRepository<feedback, Integer> {
}