package com.example.project.backend.mappers;


import com.example.project.backend.dtos.adminDto;
import com.example.project.backend.models.admin;


public class adminMapper {


    public static adminDto mapToAdminDto(admin admin) {
        return new adminDto(
                admin.getId(),
                admin.getName(),
                admin.getLevel(),
                admin.getInsitution(),
                admin.getRank(),
                admin.getLocation(),
                admin.getGrade()
                // admin.getActions()
                );
    }

    public static admin mapToAdmin(adminDto adminDto) {
        return new admin(
                adminDto.getId(),
                adminDto.getName(),
                adminDto.getLevel(),
                adminDto.getInsitution(),
                adminDto.getRank(),
                adminDto.getLocation(),
                adminDto.getGrade()
                // adminDto.getActions()
                );
    }
}