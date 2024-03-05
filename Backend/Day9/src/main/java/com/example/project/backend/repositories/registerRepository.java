package com.example.project.backend.repositories;

import com.example.project.backend.models.register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface registerRepository extends JpaRepository<register, Integer> {
}