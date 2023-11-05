package com.aymanba.ec.service;

import com.aymanba.ec.dto.product.ProductDTO;
import com.aymanba.ec.model.product.ProductEntity;
import com.aymanba.ec.repository.ProductRepository;
import com.aymanba.ec.request.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public ProductEntity save(ProductRequest productRequest) {
        var product = ProductEntity.builder()
                .name(productRequest.getName())
                .price(productRequest.getPrice())
                .category(productRequest.getCategory())
                .description(productRequest.getDescription())
                .build();
        return productRepository.save(product);
    }

    public List<ProductDTO> getAll() {
        return productRepository.findAll()
                .stream()
                .map(productEntity -> ProductDTO.builder()
                        .id(productEntity.getId())
                        .name(productEntity.getName())
                        .description(productEntity.getDescription())
                        .price(productEntity.getPrice())
                        .build())
                .toList();
    }

    public void delete(int productId) {
        productRepository.deleteById(productId);
    }
}
