package com.aymanba.ec.controller;

import com.aymanba.ec.dto.PageDTO;
import com.aymanba.ec.dto.product.ProductDTO;
import com.aymanba.ec.model.product.ProductEntity;
import com.aymanba.ec.service.ProductService;
import com.aymanba.ec.request.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, allowCredentials = "true")
public class ProductController {

    private final ProductService productService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
    public ResponseEntity<ProductEntity> save(@RequestBody ProductRequest productRequest) {
        return new ResponseEntity<>(productService.save(productRequest),
                HttpStatus.CREATED);
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
    public ResponseEntity<PageDTO<ProductDTO>> getByPage(@RequestParam(defaultValue = "0") int page,
                                                         @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(required = false) String sortBy,
                                                         @RequestParam(required = false) String sortDirection) {
        return new ResponseEntity<>(productService.getByPage(page, size, sortBy, sortDirection),
                HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
