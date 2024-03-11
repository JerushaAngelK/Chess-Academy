package com.example.project.backend.dtos;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class reportDto {
    // private int id;
    // @Lob
    // @Column(name = "screenshot")
    // private byte[] screenshot;
    // private String complaint;
    // private String base64Screenshot; 
    private int id;
    private String screenshot;
    private String complaint;

}


