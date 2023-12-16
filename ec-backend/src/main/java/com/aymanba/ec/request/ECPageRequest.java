package com.aymanba.ec.request;

import lombok.Builder;

@Builder
public record ECPageRequest(int page,
                            int size,
                            String sortBy,
                            String sortDirection) {
}
