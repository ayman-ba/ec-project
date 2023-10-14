package com.aymanba.ec.repository;

import com.aymanba.ec.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
