package com.example.project.backend.services;

import com.example.project.backend.dtos.offlineCoursesDto;

import java.util.List;

public interface offlineCoursesService {
    offlineCoursesDto createOfflineCourses(offlineCoursesDto offlineCoursesDto);
    offlineCoursesDto getOfflineCoursesById(int offlineCoursesId);
    List<offlineCoursesDto> getAllOfflineCourses();

    offlineCoursesDto updateOfflineCourses(int id, offlineCoursesDto offlineCoursesDto);

    void deleteOfflineCourses(int id);
}
