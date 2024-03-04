package com.example.project.backend.mappers;


import com.example.project.backend.dtos.userDashboardDto;
import com.example.project.backend.models.userDashboard;

public class userDashboardMapper {


    public static userDashboardDto mapToUserDashboardDto(userDashboard userDashboard) {
        return new userDashboardDto(
                userDashboard.getId(),
                userDashboard.getImage(),
                userDashboard.getName(),
                userDashboard.getCountry(),
                userDashboard.getAge(),
                userDashboard.getTitle(),
                userDashboard.getAboutMe());
    }


    public static userDashboard mapToUserDashboard(userDashboardDto userDashboardDto) {
        return new userDashboard(
                userDashboardDto.getId(),
                userDashboardDto.getImage(),
                userDashboardDto.getName(),
                userDashboardDto.getCountry(),
                userDashboardDto.getAge(),
                userDashboardDto.getTitle(),
                userDashboardDto.getAboutMe());
    }
}