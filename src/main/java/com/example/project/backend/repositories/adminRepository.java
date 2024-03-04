package com.example.project.backend.repositories;

import com.example.project.backend.models.admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface adminRepository extends JpaRepository<admin, Integer> {
}