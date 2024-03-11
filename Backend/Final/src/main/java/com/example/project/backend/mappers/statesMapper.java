package com.example.project.backend.mappers;

import com.example.project.backend.dtos.statesDto;
import com.example.project.backend.models.states;

public class statesMapper {

    public static statesDto mapToStatesDto(states states) {
        return new statesDto(
                states.getId(),
                states.getStateName(),
                states.getImage());
    }

    public static states mapToStates(statesDto statesDto) {
        return new states(
                statesDto.getId(),
                statesDto.getStateName(),
                statesDto.getImage());
    }
}