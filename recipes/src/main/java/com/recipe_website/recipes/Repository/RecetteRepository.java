package com.recipe_website.recipes.Repository;

import com.recipe_website.recipes.Entity.Recette;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecetteRepository extends JpaRepository<Recette, Integer> {
}