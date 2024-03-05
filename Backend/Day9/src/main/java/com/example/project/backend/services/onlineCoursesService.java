package com.example.project.backend.services;

import com.example.project.backend.dtos.onlineCoursesDto;

import java.util.List;

public interface onlineCoursesService {
    onlineCoursesDto createOnlineCourses(onlineCoursesDto onlineCoursesDto);
    onlineCoursesDto getOnlineCoursesById(int onlineCoursesId);
    List<onlineCoursesDto> getAllOnlineCourses();
    onlineCoursesDto updateOnlineCourses(int id, onlineCoursesDto onlineCoursesDto);
    void deleteOnlineCourses(int id);
}