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
//     @Override
//     public onlineCoursesDto updateOnlineCourses(int id, onlineCoursesDto onlineCoursesDto) {
//         onlineCourses onlineCourses = onlineCoursesRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("Online Courses not found with id : " + id));
//         // onlineCourses.setId(onlineCoursesDto.getId());
// onlineCourses.setImage(onlineCoursesDto.getImage());
// onlineCourses.setTitle(onlineCoursesDto.getTitle());
// onlineCourses.setEnroll(onlineCoursesDto.isEnroll());
// onlineCourses.setDescription(onlineCoursesDto.getDescription());

//         onlineCourses updatedOnlineCourses = onlineCoursesRepository.save(onlineCourses);
//         return onlineCoursesMapper.mapToOnlineCoursesDto(updatedOnlineCourses);
//     }

    @Override
    public void deleteOnlineCourses(int id) {
        onlineCoursesRepository.deleteById(id);
    }
@Override
public onlineCoursesDto updateOnlineCourses(int onlineCoursesId, onlineCoursesDto onlineCoursesDto) {
    // Fetch the existing course
    onlineCoursesDto existingCourse = getOnlineCoursesById(onlineCoursesId);
    // Update the enroll field
    existingCourse.setEnroll(onlineCoursesDto.isEnroll());
    // Save the updated course
    // Assuming you have a method to save the updated course
    onlineCourses updatedOnlineCourses = onlineCoursesMapper.mapToOnlineCourses(existingCourse);
    onlineCoursesRepository.save(updatedOnlineCourses);
    return existingCourse;
}
}