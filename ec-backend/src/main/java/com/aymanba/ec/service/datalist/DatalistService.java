package com.aymanba.ec.service.datalist;

import com.aymanba.ec.dto.datalist.DatalistDTO;
import com.aymanba.ec.enums.DatalistType;

import java.util.List;

public interface DatalistService {

    List<DatalistDTO> getDatalist();

    DatalistType getDatalistType();

}
