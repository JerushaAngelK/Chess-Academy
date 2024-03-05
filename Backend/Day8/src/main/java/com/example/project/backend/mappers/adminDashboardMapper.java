package com.example.project.backend.mappers;


import com.example.project.backend.dtos.adminDashboardDto;
import com.example.project.backend.models.adminDashboard;

public class adminDashboardMapper {


    public static adminDashboardDto mapToAdminDashboardDto(adminDashboard adminDashboard) {
        return new adminDashboardDto(
                adminDashboard.getId(),
                adminDashboard.getImage(),
                adminDashboard.getName(),
                adminDashboard.getCountry(),
                adminDashboard.getAge(),
                adminDashboard.getTitle(),
                adminDashboard.getAboutMe());
    }


    public static adminDashboard mapToAdminDashboard(adminDashboardDto adminDashboardDto) {
        return new adminDashboard(
                adminDashboardDto.getId(),
                adminDashboardDto.getImage(),
                adminDashboardDto.getName(),
                adminDashboardDto.getCountry(),
                adminDashboardDto.getAge(),
                adminDashboardDto.getTitle(),
                adminDashboardDto.getAboutMe());
    }
}