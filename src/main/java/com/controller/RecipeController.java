package com.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.Recipe;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {

    private final ObjectMapper mapper = new ObjectMapper();

    @RequestMapping("/upload-recipe")
    public void recipeUploadSuccess(@RequestBody String recipeInputted) throws JsonProcessingException {
        Recipe recipe = mapper.readValue(recipeInputted, Recipe.class);
    }
}
