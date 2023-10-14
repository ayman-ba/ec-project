package com.aymanba.ec.controller;

import com.aymanba.ec.model.Product;
import com.aymanba.ec.service.ProductService;
import com.aymanba.ec.request.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, allowCredentials = "true")
public class ProductController {

    private final ProductService productService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
    public ResponseEntity<Product> save(@RequestBody ProductRequest productRequest) {
        return new ResponseEntity<>(productService.save(productRequest),
                HttpStatus.CREATED);
    }
}
