package com.aymanba.ec.dto;

import java.io.Serializable;

public interface BaseDTO<T extends Serializable> {
    T id();
}
