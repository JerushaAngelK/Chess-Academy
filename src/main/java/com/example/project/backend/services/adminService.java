package com.example.project.backend.services;

import com.example.project.backend.dtos.adminDto;

import java.util.List;

public interface adminService {
    adminDto createAdmin(adminDto adminDto);
    adminDto getAdminById(int adminId);
    List<adminDto> getAllAdmins();
}