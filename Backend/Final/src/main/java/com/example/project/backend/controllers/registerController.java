package com.example.project.backend.controllers;

import com.example.project.backend.dtos.registerDto;
import com.example.project.backend.services.registerService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/registers")
public class registerController {

    private registerService registerService;

    public registerController(registerService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/post")
    public ResponseEntity<registerDto> createRegister(@RequestBody registerDto registerDto) {
        registerDto savedRegister = registerService.createRegister(registerDto);
        return new ResponseEntity<>(savedRegister, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<registerDto> getRegisterById(@PathVariable("id") int registerId) {
        registerDto registerDto = registerService.getRegisterById(registerId);
        return ResponseEntity.ok(registerDto);
    }

    @GetMapping("/")
    public ResponseEntity<List<registerDto>> getAllRegisters() {
        List<registerDto> registers = registerService.getAllRegisters();
        return ResponseEntity.ok(registers);
    }
    @PutMapping("/{id}")
public ResponseEntity<registerDto> updateRegister(@PathVariable(value = "id") int registerId,
                                                 @Valid @RequestBody registerDto registerDto) {
    registerDto updatedRegister = registerService.updateRegister(registerId, registerDto);
    return ResponseEntity.ok(updatedRegister);
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteRegister(@PathVariable(value = "id") int registerId) {
    registerService.deleteRegister(registerId);
    return ResponseEntity.noContent().build();
}
}