package com.example.project.backend.controllers;

import com.example.project.backend.dtos.statesDto;
import com.example.project.backend.services.statesService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/states")
public class statesController {

    private statesService statesService;

    public statesController(statesService statesService) {
        this.statesService = statesService;
    }

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<statesDto> createStates(@RequestBody statesDto statesDto) {
        statesDto savedStates = statesService.createStates(statesDto);
        return new ResponseEntity<>(savedStates, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<statesDto> getStatesById(@PathVariable("id") int statesId) {
        statesDto statesDto = statesService.getStatesById(statesId);
        return ResponseEntity.ok(statesDto);
    }

    @GetMapping("/")
    public ResponseEntity<List<statesDto>> getAllStates() {
        List<statesDto> states = statesService.getAllStates();
        return ResponseEntity.ok(states);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
        public ResponseEntity<statesDto> updateStates(@PathVariable(value = "id") int statesId,
                                                     @Valid @RequestBody statesDto statesDto) {
            statesDto updatedStates = statesService.updateStates(statesId, statesDto);
            return ResponseEntity.ok(updatedStates);
        }

        @DeleteMapping("/{id}")
        @PreAuthorize("hasAuthority('ADMIN')")
        public ResponseEntity<Void> deleteStates(@PathVariable(value = "id") int statesId) {
            statesService.deleteStates(statesId);
            return ResponseEntity.noContent().build();
        }
   
}