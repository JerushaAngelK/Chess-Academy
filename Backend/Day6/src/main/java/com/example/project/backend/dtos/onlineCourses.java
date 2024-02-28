package com.example.project.backend.dtos;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class onlineCourses {
    private int id;
    private String image;
    private String title;
    private boolean enroll;
    private String colleges;
}

