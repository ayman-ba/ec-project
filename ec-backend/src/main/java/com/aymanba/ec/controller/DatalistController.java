package com.aymanba.ec.controller;

import com.aymanba.ec.dto.datalist.DatalistDTO;
import com.aymanba.ec.service.datalist.DefaultDatalistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/datalist")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, allowCredentials = "true")
public class DatalistController {

    private final DefaultDatalistService defaultDatalistService;

    @GetMapping("/{name}")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
    public ResponseEntity<List<DatalistDTO>> getDatalist(@PathVariable String name) {
        return new ResponseEntity<>(defaultDatalistService.getDatalist(name), HttpStatus.OK);
    }
}
