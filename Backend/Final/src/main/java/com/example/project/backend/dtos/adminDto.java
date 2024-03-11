package com.example.project.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class adminDto {
    private int id;
    private String name;
    private String level;
    private String insitution;
    private int rank;
    private String location;
    private String grade;
    // private String actions;
 
}
