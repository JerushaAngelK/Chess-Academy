package com.example.project.backend.services;

import java.util.List;

import com.example.project.backend.dtos.registerDto;

public interface registerService {
    registerDto createRegister(registerDto registerDto);

    registerDto getRegisterById(int id);

    List<registerDto> getAllRegisters();
}

