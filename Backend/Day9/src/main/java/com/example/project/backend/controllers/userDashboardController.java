package com.example.project.backend.controllers;

import com.example.project.backend.dtos.userDashboardDto;
import com.example.project.backend.services.userDashboardService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-dashboards")
public class userDashboardController {

    private userDashboardService userDashboardService;

    public userDashboardController(userDashboardService userDashboardService) {
        this.userDashboardService = userDashboardService;
    }

    @PostMapping("/post")
    public ResponseEntity<userDashboardDto> createUserDashboard(@RequestBody userDashboardDto userDashboardDto) {
        userDashboardDto savedUserDashboard = userDashboardService.createUserDashboard(userDashboardDto);
        return new ResponseEntity<>(savedUserDashboard, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<userDashboardDto> getUserDashboardById(@PathVariable("id") int userDashboardId) {
        userDashboardDto userDashboardDto = userDashboardService.getUserDashboardById(userDashboardId);
        return ResponseEntity.ok(userDashboardDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<userDashboardDto> updateUserDashboard(@PathVariable(value = "id") int userDashboardId,
                                                               @Valid @RequestBody userDashboardDto userDashboardDto) {
        userDashboardDto updatedUserDashboard = userDashboardService.updateUserDashboard(userDashboardId, userDashboardDto);
        return ResponseEntity.ok(updatedUserDashboard);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserDashboard(@PathVariable(value = "id") int userDashboardId) {
        userDashboardService.deleteUserDashboard(userDashboardId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<userDashboardDto>> getAllUserDashboards() {
        List<userDashboardDto> userDashboards = userDashboardService.getAllUserDashboards();
        return ResponseEntity.ok(userDashboards);
    }
}