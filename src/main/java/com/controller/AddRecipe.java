package com.controller;

import com.model.Recipe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddRecipe {

    private final Logger log = LoggerFactory.getLogger(AddRecipe.class);

    @RequestMapping("/upload-recipe")
    public void recipeUploadSuccess(@RequestBody String recipeName) {
        Recipe recipe = new Recipe();
        recipe.setRecipeName(recipeName);
        log.info(recipe.getRecipeName());
    }
}
