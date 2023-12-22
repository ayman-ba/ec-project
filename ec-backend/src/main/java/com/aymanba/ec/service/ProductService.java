package com.aymanba.ec.service;

import com.aymanba.ec.dto.PageDTO;
import com.aymanba.ec.dto.product.ProductDTO;
import com.aymanba.ec.model.product.ProductEntity;
import com.aymanba.ec.repository.ProductRepository;
import com.aymanba.ec.request.ProductRequest;
import com.aymanba.ec.utils.ECUtils;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
public class ProductService {
    private final ProductRepository productRepository;

    public ProductEntity save(ProductRequest productRequest) {
        var product = ProductEntity.builder()
                .name(productRequest.getName())
                .price(productRequest.getPrice())
//                .category(productRequest.getCategory())
                .description(productRequest.getDescription())
                .build();
        return productRepository.save(product);
    }

    public PageDTO<ProductDTO> getByPage(int page,
                                         int size,
                                         String sortBy,
                                         String sortDirection) {
        var pageRequest = PageRequest.of(page, size,
                ECUtils.getSortDirection(sortDirection), sortBy);
        var productPage = productRepository.findAll(pageRequest);
        return PageDTO.<ProductDTO>builder()
                .totalPages(productPage.getTotalPages())
                .totalSizes(productPage.getTotalElements())
                .elements(productPage.get().map(this::buildProductDTO).toList())
                .build();
    }

    public void delete(int productId) {
        productRepository.deleteById(productId);
    }

    private ProductDTO buildProductDTO(ProductEntity productEntity) {
        return ProductDTO.builder()
                .id(productEntity.getId())
                .name(productEntity.getName())
                .description(productEntity.getDescription())
                .price(productEntity.getPrice())
                .build();
    }
}
