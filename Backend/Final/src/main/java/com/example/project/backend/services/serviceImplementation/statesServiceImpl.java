package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.statesDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.statesMapper;
import com.example.project.backend.models.states;
import com.example.project.backend.repositories.statesRepository;
import com.example.project.backend.services.statesService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class statesServiceImpl implements statesService {

    private statesRepository statesRepository;

    @Override
    public statesDto createStates(statesDto statesdto) {
        states states = statesMapper.mapToStates(statesdto);
        states savedStates = statesRepository.save(states);
        return statesMapper.mapToStatesDto(savedStates);
    }

    @Override
    public statesDto getStatesById(int statesId) {
        states states = statesRepository.findById(statesId)
                .orElseThrow(() -> new ResourceNotFoundException("States is not exist with given id : " + statesId));

        return statesMapper.mapToStatesDto(states);
    }

    @Override
    public List<statesDto> getAllStates() {
        List<states> statesList = statesRepository.findAll();

        List<statesDto> statesDtos = new ArrayList<>();
        for (states states : statesList) {
            statesDtos.add(statesMapper.mapToStatesDto(states));
        }

        return statesDtos;
    }
    @Override
    public statesDto updateStates(int id, statesDto statesDto) {
        states states = statesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("States not found with id : " + id));
        // states.setId(statesDto.getId());
states.setStateName(statesDto.getStateName());
states.setImage(statesDto.getImage());

        states updatedStates = statesRepository.save(states);
        return statesMapper.mapToStatesDto(updatedStates);
    }

    @Override
    public void deleteStates(int id) {
        statesRepository.deleteById(id);
    }
}