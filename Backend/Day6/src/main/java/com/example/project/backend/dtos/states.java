package com.example.project.backend.dtos;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class states {
    private int id;
    private String stateName;
    private String image;
    // @ElementCollection
    // @CollectionTable(name = "state_images", joinColumns = @JoinColumn(name = "state_id"))
    // private ArrayList<String> courses;
}
