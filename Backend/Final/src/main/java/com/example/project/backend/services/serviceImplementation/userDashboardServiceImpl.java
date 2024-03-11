package com.example.project.backend.services.serviceImplementation;


import com.example.project.backend.dtos.userDashboardDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.userDashboardMapper;
import com.example.project.backend.models.userDashboard;
import com.example.project.backend.repositories.userDashboardRepository;
import com.example.project.backend.services.userDashboardService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor

public class userDashboardServiceImpl implements userDashboardService {


    private userDashboardRepository userDashboardRepository;


    @Override
    public userDashboardDto createUserDashboard(userDashboardDto userDashboarddto) {
        userDashboard userDashboard = userDashboardMapper.mapToUserDashboard(userDashboarddto);
        userDashboard savedUserDashboard = userDashboardRepository.save(userDashboard);
        return userDashboardMapper.mapToUserDashboardDto(savedUserDashboard);
    }


    @Override
    public userDashboardDto getUserDashboardById(int userDashboardId) {
        userDashboard userDashboard = userDashboardRepository.findById(userDashboardId)
                .orElseThrow(() -> new ResourceNotFoundException("User Dashboard is not exist with given id : " + userDashboardId));


        return userDashboardMapper.mapToUserDashboardDto(userDashboard);
    }


//     @Override
//     public userDashboardDto updateUserDashboard(int id, userDashboardDto userDashboardDto) {
//         userDashboard userDashboard = userDashboardRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("User Dashboard not found with id : " + id));
//         // userDashboard.setId(userDashboardDto.getId());
// userDashboard.setImage(userDashboardDto.getImage());
// userDashboard.setName(userDashboardDto.getName());
// userDashboard.setCountry(userDashboardDto.getCountry());
// userDashboard.setAge(userDashboardDto.getAge());
// userDashboard.setTitle(userDashboardDto.getTitle());
// userDashboard.setAboutMe(userDashboardDto.getAboutMe());

//         userDashboard updatedUserDashboard = userDashboardRepository.save(userDashboard);
//         return userDashboardMapper.mapToUserDashboardDto(updatedUserDashboard);
//     }

    @Override
    public void deleteUserDashboard(int id) {
        userDashboardRepository.deleteById(id);
    }
    @Override
    public List<userDashboardDto> getAllUserDashboards() {
        List<userDashboard> userDashboardList = userDashboardRepository.findAll();


        List<userDashboardDto> userDashboardDtos = new ArrayList<>();
        for (userDashboard userDashboard : userDashboardList) {
            userDashboardDtos.add(userDashboardMapper.mapToUserDashboardDto(userDashboard));
        }


        return userDashboardDtos;
    }
    @Override
public userDashboardDto updateUserDashboard(int id, userDashboardDto userDashboardDto) {
    userDashboard userDashboard = userDashboardRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User Dashboard not found with id : " + id));
    userDashboard.setImage(userDashboardDto.getImage());
    userDashboard.setName(userDashboardDto.getName());
    userDashboard.setCountry(userDashboardDto.getCountry());
    userDashboard.setAge(userDashboardDto.getAge());
    userDashboard.setTitle(userDashboardDto.getTitle());
    userDashboard.setAboutMe(userDashboardDto.getAboutMe());

    userDashboard updatedUserDashboard = userDashboardRepository.save(userDashboard);
    return userDashboardMapper.mapToUserDashboardDto(updatedUserDashboard);
}

}