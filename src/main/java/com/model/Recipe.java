package com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Table(name = "recipes")
@Data
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;

    private String recipeName;
    private String recipe;

}
