package com.example.project.backend.controllers;

import com.example.project.backend.dtos.onlineCoursesDto;
import com.example.project.backend.services.onlineCoursesService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/online-courses")
public class onlineCoursesController {

    private onlineCoursesService onlineCoursesService;

    public onlineCoursesController(onlineCoursesService onlineCoursesService) {
        this.onlineCoursesService = onlineCoursesService;
    }

    @PostMapping("/post")
     @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<onlineCoursesDto> createOnlineCourses(@RequestBody onlineCoursesDto onlineCoursesDto) {
        onlineCoursesDto savedOnlineCourses = onlineCoursesService.createOnlineCourses(onlineCoursesDto);
        return new ResponseEntity<>(savedOnlineCourses, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<onlineCoursesDto> getOnlineCoursesById(@PathVariable("id") int onlineCoursesId) {
        onlineCoursesDto onlineCoursesDto = onlineCoursesService.getOnlineCoursesById(onlineCoursesId);
        return ResponseEntity.ok(onlineCoursesDto);
    }

    @GetMapping("/")
    public ResponseEntity<List<onlineCoursesDto>> getAllOnlineCourses() {
        List<onlineCoursesDto> onlineCourses = onlineCoursesService.getAllOnlineCourses();
        return ResponseEntity.ok(onlineCourses);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<onlineCoursesDto> updateOnlineCourses(@PathVariable(value = "id") int onlineCoursesId,
                                                               @Valid @RequestBody onlineCoursesDto onlineCoursesDto) {
        onlineCoursesDto updatedOnlineCourses = onlineCoursesService.updateOnlineCourses(onlineCoursesId, onlineCoursesDto);
        return ResponseEntity.ok(updatedOnlineCourses);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteOnlineCourses(@PathVariable(value = "id") int onlineCoursesId) {
        onlineCoursesService.deleteOnlineCourses(onlineCoursesId);
        return ResponseEntity.noContent().build();
    }
}