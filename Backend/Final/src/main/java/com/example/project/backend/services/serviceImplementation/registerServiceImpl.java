package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.registerDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.registerMapper;
import com.example.project.backend.models.register;
import com.example.project.backend.repositories.registerRepository;
import com.example.project.backend.services.registerService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class registerServiceImpl implements registerService {

    private registerRepository registerRepository;
    @Override
    public registerDto createRegister(registerDto registerdto) {
        register register = registerMapper.mapToRegister(registerdto);
        register savedRegister = registerRepository.save(register);
        return registerMapper.mapToRegisterDto(savedRegister);
    }

    @Override
    public registerDto getRegisterById(int registerId) {
        register register = registerRepository.findById(registerId)
                .orElseThrow(() -> new ResourceNotFoundException("Register is not exist with given id : " + registerId));

        return registerMapper.mapToRegisterDto(register);
    }

    @Override
    public List<registerDto> getAllRegisters() {
        List<register> registers = registerRepository.findAll();

        List<registerDto> registerDtos = new ArrayList<>();
        for (register register : registers) {
            registerDtos.add(registerMapper.mapToRegisterDto(register));
        }

        return registerDtos;
    }
    @Override
    public registerDto updateRegister(int id, registerDto registerDto) {
        register register = registerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Register not found with id : " + id));

        register.setEmail(registerDto.getEmail());
        register.setPassword(registerDto.getPassword());
        register.setRepwd(registerDto.getRepwd());
        register.setRoles(registerDto.getRoles());

        register updatedRegister = registerRepository.save(register);
        return registerMapper.mapToRegisterDto(updatedRegister);
    }

    @Override
    public void deleteRegister(int id) {
        registerRepository.deleteById(id);
    }
    
}