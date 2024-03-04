package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.feedbackDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.feedbackMapper;
import com.example.project.backend.models.feedback;
import com.example.project.backend.repositories.feedbackRepository;
import com.example.project.backend.services.feedbackService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor
public class feedbackServiceImpl implements feedbackService {


    private feedbackRepository feedbackRepository;


    @Override
    public feedbackDto createFeedback(feedbackDto feedbackdto) {
        feedback feedback = feedbackMapper.mapToFeedback(feedbackdto);
        feedback savedFeedback = feedbackRepository.save(feedback);
        return feedbackMapper.mapToFeedbackDto(savedFeedback);
    }


    @Override
    public feedbackDto getFeedbackById(int feedbackId) {
        feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback is not exist with given id : " + feedbackId));


        return feedbackMapper.mapToFeedbackDto(feedback);
    }


    @Override
    public List<feedbackDto> getAllFeedbacks() {
        List<feedback> feedbackList = feedbackRepository.findAll();


        List<feedbackDto> feedbackDtos = new ArrayList<>();
        for (feedback feedback : feedbackList) {
            feedbackDtos.add(feedbackMapper.mapToFeedbackDto(feedback));
        }


        return feedbackDtos;
    }
}