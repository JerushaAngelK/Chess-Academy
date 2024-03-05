package com.example.project.backend.controllers;

import com.example.project.backend.dtos.adminDashboardDto;
import com.example.project.backend.services.adminDashboardService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin-dashboards")
public class adminDashboardController {

    private adminDashboardService adminDashboardService;

    public adminDashboardController(adminDashboardService adminDashboardService) {
        this.adminDashboardService = adminDashboardService;
    }

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDashboardDto> createAdminDashboard(@RequestBody adminDashboardDto adminDashboardDto) {
        adminDashboardDto savedAdminDashboard = adminDashboardService.createAdminDashboard(adminDashboardDto);
        return new ResponseEntity<>(savedAdminDashboard, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDashboardDto> getAdminDashboardById(@PathVariable("id") int adminDashboardId) {
        adminDashboardDto adminDashboardDto = adminDashboardService.getAdminDashboardById(adminDashboardId);
        return ResponseEntity.ok(adminDashboardDto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<adminDashboardDto> updateAdminDashboard(@PathVariable(value = "id") int adminDashboardId,
                                                                 @Valid @RequestBody adminDashboardDto adminDashboardDto) {
        adminDashboardDto updatedAdminDashboard = adminDashboardService.updateAdminDashboard(adminDashboardId, adminDashboardDto);
        return ResponseEntity.ok(updatedAdminDashboard);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteAdminDashboard(@PathVariable(value = "id") int adminDashboardId) {
        adminDashboardService.deleteAdminDashboard(adminDashboardId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/")
     @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<adminDashboardDto>> getAllAdminDashboards() {
        List<adminDashboardDto> adminDashboards = adminDashboardService.getAllAdminDashboards();
        return ResponseEntity.ok(adminDashboards);
    }
}