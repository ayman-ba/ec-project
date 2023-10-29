package com.aymanba.ec.service;

import com.aymanba.ec.model.Product;
import com.aymanba.ec.repository.ProductRepository;
import com.aymanba.ec.request.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product save(ProductRequest productRequest) {
        var product = Product.builder()
                .name(productRequest.getName())
                .price(productRequest.getPrice())
                .category(productRequest.getCategory())
                .description(productRequest.getDescription())
                .build();
        return productRepository.save(product);
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public void delete(int productId) {
        productRepository.deleteById(productId);
    }
}
