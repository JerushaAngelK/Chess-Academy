package com.example.project.backend.controllers;

import com.example.project.backend.dtos.adminDashboardDto;
import com.example.project.backend.services.adminDashboardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin-dashboards")
public class adminDashboardController {

    private adminDashboardService adminDashboardService;

    public adminDashboardController(adminDashboardService adminDashboardService) {
        this.adminDashboardService = adminDashboardService;
    }

    @PostMapping
    public ResponseEntity<adminDashboardDto> createAdminDashboard(@RequestBody adminDashboardDto adminDashboardDto) {
        adminDashboardDto savedAdminDashboard = adminDashboardService.createAdminDashboard(adminDashboardDto);
        return new ResponseEntity<>(savedAdminDashboard, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<adminDashboardDto> getAdminDashboardById(@PathVariable("id") int adminDashboardId) {
        adminDashboardDto adminDashboardDto = adminDashboardService.getAdminDashboardById(adminDashboardId);
        return ResponseEntity.ok(adminDashboardDto);
    }

    @GetMapping
    public ResponseEntity<List<adminDashboardDto>> getAllAdminDashboards() {
        List<adminDashboardDto> adminDashboards = adminDashboardService.getAllAdminDashboards();
        return ResponseEntity.ok(adminDashboards);
    }
}