package com.example.project.backend.services;

import com.example.project.backend.dtos.statesDto;

import java.util.List;

public interface statesService {
    statesDto createStates(statesDto statesDto);
    statesDto getStatesById(int statesId);
    List<statesDto> getAllStates();
}