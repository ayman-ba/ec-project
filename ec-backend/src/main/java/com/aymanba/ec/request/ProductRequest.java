package com.aymanba.ec.request;

import lombok.Builder;

@Builder
public record ProductRequest(String name,
                             Double price,
                             Short categoryCode,
                             String description) {
}
