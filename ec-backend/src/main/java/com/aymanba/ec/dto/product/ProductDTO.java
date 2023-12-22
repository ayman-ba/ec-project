package com.aymanba.ec.dto.product;

import com.aymanba.ec.dto.BaseDTO;
import lombok.Builder;

import java.io.Serializable;

@Builder
public record ProductDTO(Integer id,
                         String name,
                         String description,
                         Double price,
                         CategoryDTO category) implements BaseDTO<Integer>, Serializable {
}
