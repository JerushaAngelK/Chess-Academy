package com.example.project.backend.controllers;

import com.example.project.backend.dtos.feedbackDto;
import com.example.project.backend.services.feedbackService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
public class feedbackController {

    private feedbackService feedbackService;

    public feedbackController(feedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/post")
     @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<feedbackDto> createFeedback(@RequestBody feedbackDto feedbackDto) {
        feedbackDto savedFeedback = feedbackService.createFeedback(feedbackDto);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<feedbackDto> getFeedbackById(@PathVariable("id") int feedbackId) {
        feedbackDto feedbackDto = feedbackService.getFeedbackById(feedbackId);
        return ResponseEntity.ok(feedbackDto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<feedbackDto> updateFeedback(@PathVariable(value = "id") int feedbackId,
                                                     @Valid @RequestBody feedbackDto feedbackDto) {
        feedbackDto updatedFeedback = feedbackService.updateFeedback(feedbackId, feedbackDto);
        return ResponseEntity.ok(updatedFeedback);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Void> deleteFeedback(@PathVariable(value = "id") int feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/")
    public ResponseEntity<List<feedbackDto>> getAllFeedbacks() {
        List<feedbackDto> feedbacks = feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(feedbacks);
    }
}