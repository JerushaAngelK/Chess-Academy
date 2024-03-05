package com.example.project.backend.repositories;

import com.example.project.backend.models.report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface reportRepository extends JpaRepository<report, Integer> {
}