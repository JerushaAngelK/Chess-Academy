package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.onlineCoursesDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.onlineCoursesMapper;
import com.example.project.backend.models.onlineCourses;
import com.example.project.backend.repositories.onlineCoursesRepository;
import com.example.project.backend.services.onlineCoursesService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class onlineCoursesServiceImpl implements onlineCoursesService {

    private onlineCoursesRepository onlineCoursesRepository;

    @Override
    public onlineCoursesDto createOnlineCourses(onlineCoursesDto onlineCoursesdto) {
        onlineCourses onlineCourses = onlineCoursesMapper.mapToOnlineCourses(onlineCoursesdto);
        onlineCourses savedOnlineCourses = onlineCoursesRepository.save(onlineCourses);
        return onlineCoursesMapper.mapToOnlineCoursesDto(savedOnlineCourses);
    }

    @Override
    public onlineCoursesDto getOnlineCoursesById(int onlineCoursesId) {
        onlineCourses onlineCourses = onlineCoursesRepository.findById(onlineCoursesId)
                .orElseThrow(() -> new ResourceNotFoundException("Online Courses is not exist with given id : " + onlineCoursesId));

        return onlineCoursesMapper.mapToOnlineCoursesDto(onlineCourses);
    }

    @Override
    public List<onlineCoursesDto> getAllOnlineCourses() {
        List<onlineCourses> onlineCoursesList = onlineCoursesRepository.findAll();

        List<onlineCoursesDto> onlineCoursesDtos = new ArrayList<>();
        for (onlineCourses onlineCourses : onlineCoursesList) {
            onlineCoursesDtos.add(onlineCoursesMapper.mapToOnlineCoursesDto(onlineCourses));
        }

        return onlineCoursesDtos;
    }
}