package com.aymanba.ec.repository;

import com.aymanba.ec.model.product.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Short> {
}
