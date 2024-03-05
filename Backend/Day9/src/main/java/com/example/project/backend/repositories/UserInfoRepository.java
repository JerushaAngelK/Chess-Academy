package com.example.project.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.backend.models.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 