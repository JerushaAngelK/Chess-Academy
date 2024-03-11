package com.example.project.backend.dtos;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class feedbackDto {
    private int id;
    private String name;
    private String title;
    private String message;
}


