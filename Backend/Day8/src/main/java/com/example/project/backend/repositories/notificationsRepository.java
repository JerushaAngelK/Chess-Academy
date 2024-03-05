package com.example.project.backend.repositories;

import com.example.project.backend.models.notifications;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface notificationsRepository extends JpaRepository<notifications, Integer> {
}