package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.adminDto;
import com.example.project.backend.models.admin;
import com.example.project.backend.repositories.adminRepository;
import com.example.project.backend.services.adminService;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.adminMapper;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
@Service
@AllArgsConstructor
public class adminServiceImpl implements adminService {

    private adminRepository adminRepository;

    @Override
    public adminDto createAdmin(adminDto admindto) {
        admin admin = adminMapper.mapToAdmin(admindto);
        admin savedAdmin = adminRepository.save(admin);
        return adminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    public adminDto getAdminById(int adminId) {
        admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin is not exist with given id : " + adminId));


        return adminMapper.mapToAdminDto(admin);
    }

    @Override
    public List<adminDto> getAllAdmins() {
        List<admin> adminList = adminRepository.findAll();

        List<adminDto> adminDtos = new ArrayList<>();
        for (admin admin : adminList) {
            adminDtos.add(adminMapper.mapToAdminDto(admin));
        }

        return adminDtos;
    }
    @Override
    public adminDto updateAdmin(int id, adminDto adminDto) {
        admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id : " + id));

        // Update the fields of the admin object
        admin.setName(adminDto.getName());
        admin.setPassword(adminDto.getPassword());

        admin updatedAdmin = adminRepository.save(admin);
        return adminMapper.mapToAdminDto(updatedAdmin);
    }

    @Override
    public void deleteAdmin(int id) {
        adminRepository.deleteById(id);
    }
    
}