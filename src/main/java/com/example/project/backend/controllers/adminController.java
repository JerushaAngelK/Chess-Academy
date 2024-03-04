package com.example.project.backend.controllers;

import com.example.project.backend.dtos.adminDto;
import com.example.project.backend.services.adminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class adminController {

    private adminService adminService;
    public adminController(adminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping
    public ResponseEntity<adminDto> createAdmin(@RequestBody adminDto adminDto) {
        adminDto savedAdmin = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<adminDto> getAdminById(@PathVariable("id") int adminId) {
        adminDto adminDto = adminService.getAdminById(adminId);
        return ResponseEntity.ok(adminDto);
    }

    @GetMapping
    public ResponseEntity<List<adminDto>> getAllAdmins() {
        List<adminDto> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }
}