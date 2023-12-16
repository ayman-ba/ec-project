package com.aymanba.ec.dto;

import lombok.Builder;

import java.io.Serializable;
import java.util.List;

@Builder
public record PageDTO<T extends Serializable>(int totalPages,
                                              long totalSizes,
                                              List<T> elements) {
}
