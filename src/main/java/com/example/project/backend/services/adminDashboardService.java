package com.example.project.backend.services;

import com.example.project.backend.dtos.adminDashboardDto;

import java.util.List;

public interface adminDashboardService {
    adminDashboardDto createAdminDashboard(adminDashboardDto adminDashboardDto);
    adminDashboardDto getAdminDashboardById(int adminDashboardId);
    List<adminDashboardDto> getAllAdminDashboards();
}