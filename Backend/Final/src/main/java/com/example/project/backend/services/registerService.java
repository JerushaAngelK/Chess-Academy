package com.example.project.backend.services;

import java.util.List;

import com.example.project.backend.dtos.registerDto;

public interface registerService {
    registerDto createRegister(registerDto registerinfo);
    registerDto getRegisterById(int id);
    registerDto updateRegister(int id, registerDto registerDto);
    void deleteRegister(int id);
    List<registerDto> getAllRegisters();
}

