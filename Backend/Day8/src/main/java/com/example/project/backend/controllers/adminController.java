package com.example.project.backend.controllers;

import com.example.project.backend.dtos.adminDto;
import com.example.project.backend.services.adminService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class adminController {

    private adminService adminService;
    public adminController(adminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/post")
     @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDto> createAdmin(@RequestBody adminDto adminDto) {
        adminDto savedAdmin = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDto> getAdminById(@PathVariable("id") int adminId) {
        adminDto adminDto = adminService.getAdminById(adminId);
        return ResponseEntity.ok(adminDto);
    }

    @GetMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<adminDto>> getAllAdmins() {
        List<adminDto> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDto> updateAdmin(@PathVariable(value = "id") int adminId,
                                               @Valid @RequestBody adminDto adminDto) {
        adminDto updatedAdmin = adminService.updateAdmin(adminId, adminDto);
        return ResponseEntity.ok(updatedAdmin);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteAdmin(@PathVariable(value = "id") int adminId) {
        adminService.deleteAdmin(adminId);
        return ResponseEntity.noContent().build();
    }
}