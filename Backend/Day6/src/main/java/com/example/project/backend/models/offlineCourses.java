package com.example.project.backend.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class offlineCourses {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String image;
    private String title;
    private boolean enroll;
}

