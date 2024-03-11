package com.example.project.backend.mappers;

import com.example.project.backend.dtos.onlineCoursesDto;
import com.example.project.backend.models.onlineCourses;

public class onlineCoursesMapper {

    public static onlineCoursesDto mapToOnlineCoursesDto(onlineCourses onlineCourses) {
        return new onlineCoursesDto(
                onlineCourses.getId(),
                onlineCourses.getImage(),
                onlineCourses.getTitle(),
                onlineCourses.getTime(),
                onlineCourses.isEnroll(),
                onlineCourses.getDescription());
    }

    public static onlineCourses mapToOnlineCourses(onlineCoursesDto onlineCoursesDto) {
        return new onlineCourses(
                onlineCoursesDto.getId(),
                onlineCoursesDto.getImage(),
                onlineCoursesDto.getTitle(),
                onlineCoursesDto.getTime(),
                onlineCoursesDto.isEnroll(),
                onlineCoursesDto.getDescription());
    }
}