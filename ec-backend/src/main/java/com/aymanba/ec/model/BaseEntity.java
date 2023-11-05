package com.aymanba.ec.model;

import java.io.Serializable;

public interface BaseEntity<T extends Serializable> {

    T getId();
}
