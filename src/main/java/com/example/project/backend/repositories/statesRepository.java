package com.example.project.backend.repositories;

import com.example.project.backend.models.states;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface statesRepository extends JpaRepository<states, Integer> {
}