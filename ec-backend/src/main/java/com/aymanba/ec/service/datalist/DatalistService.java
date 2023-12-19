package com.aymanba.ec.service.datalist;

import com.aymanba.ec.dto.datalist.DatalistDTO;

import java.util.List;

@FunctionalInterface
public interface DatalistService {
    List<DatalistDTO> getDatalist();
}
