package com.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.Recipe;
import com.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepo;
    private final ObjectMapper mapper = new ObjectMapper();

    @RequestMapping("/upload-recipe")
    public void recipeUpload(@RequestBody String recipeInputted) throws JsonProcessingException {
        Recipe recipe = mapper.readValue(recipeInputted, Recipe.class);
        recipeRepo.save(recipe);
    }

    @GetMapping("/recipes")
    public Collection<Recipe> recipes() {
        return recipeRepo.findAll();
    }
}
