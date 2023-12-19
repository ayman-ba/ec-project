package com.aymanba.ec.dto.product;

import com.aymanba.ec.dto.BaseDTO;
import lombok.Builder;

@Builder
public record CategoryDTO(
        Short id,
        String name) implements BaseDTO<Short> {
}
