package com.example.project.backend.services;

import com.example.project.backend.dtos.userDashboardDto;

import java.util.List;

public interface userDashboardService {
    userDashboardDto createUserDashboard(userDashboardDto userDashboardDto);
    userDashboardDto getUserDashboardById(int userDashboardId);
    List<userDashboardDto> getAllUserDashboards();
}