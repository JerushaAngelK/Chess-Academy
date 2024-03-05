package com.example.project.backend.dtos;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class adminDashboardDto {
    private int id;
    private String image;
    private String name;
    private String country;
    private int age;
    private String title;
    private String aboutMe;  
}

