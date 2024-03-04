package com.example.project.backend.controllers;

import com.example.project.backend.dtos.statesDto;
import com.example.project.backend.services.statesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/states")
public class statesController {

    private statesService statesService;

    public statesController(statesService statesService) {
        this.statesService = statesService;
    }

    @PostMapping
    public ResponseEntity<statesDto> createStates(@RequestBody statesDto statesDto) {
        statesDto savedStates = statesService.createStates(statesDto);
        return new ResponseEntity<>(savedStates, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<statesDto> getStatesById(@PathVariable("id") int statesId) {
        statesDto statesDto = statesService.getStatesById(statesId);
        return ResponseEntity.ok(statesDto);
    }

    @GetMapping
    public ResponseEntity<List<statesDto>> getAllStates() {
        List<statesDto> states = statesService.getAllStates();
        return ResponseEntity.ok(states);
    }
}