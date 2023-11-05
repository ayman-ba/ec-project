package com.aymanba.ec.dto.product;

import com.aymanba.ec.dto.BaseDTO;
import lombok.Builder;

@Builder
public record ProductDTO(Integer id,
                         String name,
                         String description,
                         Double price) implements BaseDTO<Integer> {
}
