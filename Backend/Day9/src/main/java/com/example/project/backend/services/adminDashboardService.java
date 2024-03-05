package com.example.project.backend.services;

import com.example.project.backend.dtos.adminDashboardDto;

import java.util.List;

public interface adminDashboardService {
    adminDashboardDto createAdminDashboard(adminDashboardDto adminDashboardDto);
    adminDashboardDto getAdminDashboardById(int adminDashboardId);
    adminDashboardDto updateAdminDashboard(int id, adminDashboardDto adminDashboardDto);
    void deleteAdminDashboard(int id);
    List<adminDashboardDto> getAllAdminDashboards();
}