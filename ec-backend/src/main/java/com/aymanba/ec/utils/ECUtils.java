package com.aymanba.ec.utils;

import org.springframework.data.domain.Sort;

public final class ECUtils {

    public static Sort.Direction getSortDirection(String sortDirection) {
        return "desc".equalsIgnoreCase(sortDirection) ? Sort.Direction.DESC : Sort.Direction.ASC;
    }

    private ECUtils() {
    }
}
