package com.aymanba.ec.enums;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.stream.Stream;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public enum DatalistType {

    CATEGORIES("categories");
    private static final DatalistType[] VALUES = values();

    private final String name;

    public static DatalistType fromName(String name){
        return Stream.of(VALUES)
                .filter(datalistType ->  datalistType.getName().equalsIgnoreCase(name))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("No datalist found from name: " + name));
    }
}
