package com.aymanba.ec.dto.datalist;

import lombok.Builder;

@Builder
public record DatalistDTO(Short code,
                          String label) {
}
