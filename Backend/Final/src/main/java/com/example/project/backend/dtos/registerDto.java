package com.example.project.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class registerDto {
    private int id;
    private String email;
    private String password;
    private String repwd;
    private String roles;
    
}
