package com.example.project.backend.repositories;

import com.example.project.backend.models.userDashboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userDashboardRepository extends JpaRepository<userDashboard, Integer> {
}