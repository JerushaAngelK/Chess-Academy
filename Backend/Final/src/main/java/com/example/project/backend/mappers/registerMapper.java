package com.example.project.backend.mappers;

import com.example.project.backend.dtos.registerDto;
import com.example.project.backend.models.register;

public class registerMapper {

    public static registerDto mapToRegisterDto(register register) {
        return new registerDto(
                register.getId(),
                register.getEmail(),
                register.getPassword(),
                register.getRepwd(),
                register.getRoles());
    }

    public static register mapToRegister(registerDto registerDto) {
        return new register(
                registerDto.getId(),
                registerDto.getEmail(),
                registerDto.getPassword(),
                registerDto.getRepwd(),
                registerDto.getRoles());
    }
}