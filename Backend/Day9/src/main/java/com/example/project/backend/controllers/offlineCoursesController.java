package com.example.project.backend.controllers;

import com.example.project.backend.dtos.offlineCoursesDto;
import com.example.project.backend.services.offlineCoursesService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offline-courses")
public class offlineCoursesController {

    private offlineCoursesService offlineCoursesService;

    public offlineCoursesController(offlineCoursesService offlineCoursesService) {
        this.offlineCoursesService = offlineCoursesService;
    }

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<offlineCoursesDto> createOfflineCourses(@RequestBody offlineCoursesDto offlineCoursesDto) {
        offlineCoursesDto savedOfflineCourses = offlineCoursesService.createOfflineCourses(offlineCoursesDto);
        return new ResponseEntity<>(savedOfflineCourses, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<offlineCoursesDto> getOfflineCoursesById(@PathVariable("id") int offlineCoursesId) {
        offlineCoursesDto offlineCoursesDto = offlineCoursesService.getOfflineCoursesById(offlineCoursesId);
        return ResponseEntity.ok(offlineCoursesDto);
    }

    @GetMapping("/")
    public ResponseEntity<List<offlineCoursesDto>> getAllOfflineCourses() {
        List<offlineCoursesDto> offlineCourses = offlineCoursesService.getAllOfflineCourses();
        return ResponseEntity.ok(offlineCourses);
    }
        @PutMapping("/{id}")
        @PreAuthorize("hasAuthority('ADMIN')")
        public ResponseEntity<offlineCoursesDto> updateOfflineCourses(@PathVariable(value = "id") int offlineCoursesId,
                                                                     @Valid @RequestBody offlineCoursesDto offlineCoursesDto) {
            offlineCoursesDto updatedOfflineCourses = offlineCoursesService.updateOfflineCourses(offlineCoursesId, offlineCoursesDto);
            return ResponseEntity.ok(updatedOfflineCourses);
        }

        @PreAuthorize("hasAuthority('ADMIN')")
        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteOfflineCourses(@PathVariable(value = "id") int offlineCoursesId) {
            offlineCoursesService.deleteOfflineCourses(offlineCoursesId);
            return ResponseEntity.noContent().build();
        }
}