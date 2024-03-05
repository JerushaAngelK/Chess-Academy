package com.example.project.backend.mappers;


import com.example.project.backend.dtos.feedbackDto;
import com.example.project.backend.models.feedback;

public class feedbackMapper {


    public static feedbackDto mapToFeedbackDto(feedback feedback) {
        return new feedbackDto(
                feedback.getId(),
                feedback.getName(),
                feedback.getTitle(),
                feedback.getMessage());
    }


    public static feedback mapToFeedback(feedbackDto feedbackDto) {
        return new feedback(
                feedbackDto.getId(),
                feedbackDto.getName(),
                feedbackDto.getTitle(),
                feedbackDto.getMessage());
    }
}