package com.example.project.backend.repositories;

import com.example.project.backend.models.adminDashboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface adminDashboardRepository extends JpaRepository<adminDashboard, Integer> {
}