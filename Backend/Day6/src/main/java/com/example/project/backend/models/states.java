package com.example.project.backend.models;



import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class states {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String stateName;
    private String image;
    // @ElementCollection
    // @CollectionTable(name = "state_images", joinColumns = @JoinColumn(name = "state_id"))
    // private ArrayList<String> courses;
}
