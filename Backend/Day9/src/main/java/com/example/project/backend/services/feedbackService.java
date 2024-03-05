package com.example.project.backend.services;

import com.example.project.backend.dtos.feedbackDto;

import java.util.List;

public interface feedbackService {
    feedbackDto createFeedback(feedbackDto feedbackDto);
    feedbackDto getFeedbackById(int feedbackId);
    feedbackDto updateFeedback(int id, feedbackDto feedbackDto);
    void deleteFeedback(int id);
    List<feedbackDto> getAllFeedbacks();
}