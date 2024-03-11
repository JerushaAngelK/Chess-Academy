package com.example.project.backend.mappers;

import com.example.project.backend.dtos.offlineCoursesDto;
import com.example.project.backend.models.offlineCourses;

public class offlineCoursesMapper {

    public static offlineCoursesDto mapToOfflineCoursesDto(offlineCourses offlineCourses) {
        return new offlineCoursesDto(
                offlineCourses.getId(),
                offlineCourses.getImage(),
                offlineCourses.getTitle(),
                offlineCourses.getDuration(),
                offlineCourses.getStaffName(),
                offlineCourses.isEnroll());
    }

    public static offlineCourses mapToOfflineCourses(offlineCoursesDto offlineCoursesDto) {
        return new offlineCourses(
                offlineCoursesDto.getId(),
                offlineCoursesDto.getImage(),
                offlineCoursesDto.getTitle(),
                offlineCoursesDto.getDuration(),
                offlineCoursesDto.getStaffName(),
                offlineCoursesDto.isEnroll());
    }
}