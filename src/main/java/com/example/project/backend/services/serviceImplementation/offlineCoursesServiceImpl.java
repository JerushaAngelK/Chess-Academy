package com.example.project.backend.services.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.project.backend.dtos.offlineCoursesDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.offlineCoursesMapper;
import com.example.project.backend.models.offlineCourses;
import com.example.project.backend.repositories.offlineCoursesRepository;
import com.example.project.backend.services.offlineCoursesService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class offlineCoursesServiceImpl implements offlineCoursesService {

    private offlineCoursesRepository offlineCoursesRepository;

    @Override
    public offlineCoursesDto createOfflineCourses(offlineCoursesDto offlineCoursesdto) {
        offlineCourses offlineCourses = offlineCoursesMapper.mapToOfflineCourses(offlineCoursesdto);
        offlineCourses savedOfflineCourses = offlineCoursesRepository.save(offlineCourses);
        return offlineCoursesMapper.mapToOfflineCoursesDto(savedOfflineCourses);
    }

    @Override
    public offlineCoursesDto getOfflineCoursesById(int offlineCoursesId) {
        offlineCourses offlineCourses = offlineCoursesRepository.findById(offlineCoursesId)
                .orElseThrow(() -> new ResourceNotFoundException("Offline Courses is not exist with given id : " + offlineCoursesId));

        return offlineCoursesMapper.mapToOfflineCoursesDto(offlineCourses);
    }

    @Override
    public List<offlineCoursesDto> getAllOfflineCourses() {
        List<offlineCourses> offlineCoursesList = offlineCoursesRepository.findAll();

        List<offlineCoursesDto> offlineCoursesDtos = new ArrayList<>();
        for (offlineCourses offlineCourses : offlineCoursesList) {
            offlineCoursesDtos.add(offlineCoursesMapper.mapToOfflineCoursesDto(offlineCourses));
        }

        return offlineCoursesDtos;
    }
}