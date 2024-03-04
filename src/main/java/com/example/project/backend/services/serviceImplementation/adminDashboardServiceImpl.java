package com.example.project.backend.services.serviceImplementation;


import com.example.project.backend.dtos.adminDashboardDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.adminDashboardMapper;
import com.example.project.backend.models.adminDashboard;
import com.example.project.backend.repositories.adminDashboardRepository;
import com.example.project.backend.services.adminDashboardService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.ArrayList;
@Service
@AllArgsConstructor
public class adminDashboardServiceImpl implements adminDashboardService {


    private adminDashboardRepository adminDashboardRepository;


    @Override
    public adminDashboardDto createAdminDashboard(adminDashboardDto adminDashboarddto) {
        adminDashboard adminDashboard = adminDashboardMapper.mapToAdminDashboard(adminDashboarddto);
        adminDashboard savedAdminDashboard = adminDashboardRepository.save(adminDashboard);
        return adminDashboardMapper.mapToAdminDashboardDto(savedAdminDashboard);
    }


    @Override
    public adminDashboardDto getAdminDashboardById(int adminDashboardId) {
        adminDashboard adminDashboard = adminDashboardRepository.findById(adminDashboardId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin Dashboard is not exist with given id : " + adminDashboardId));


        return adminDashboardMapper.mapToAdminDashboardDto(adminDashboard);
    }


    @Override
    public List<adminDashboardDto> getAllAdminDashboards() {
        List<adminDashboard> adminDashboardList = adminDashboardRepository.findAll();


        List<adminDashboardDto> adminDashboardDtos = new ArrayList<>();
        for (adminDashboard adminDashboard : adminDashboardList) {
            adminDashboardDtos.add(adminDashboardMapper.mapToAdminDashboardDto(adminDashboard));
        }


        return adminDashboardDtos;
    }
}