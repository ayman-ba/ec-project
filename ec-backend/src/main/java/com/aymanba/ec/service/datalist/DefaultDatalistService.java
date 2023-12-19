package com.aymanba.ec.service.datalist;

import com.aymanba.ec.dto.datalist.DatalistDTO;
import com.aymanba.ec.enums.DatalistType;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class DefaultDatalistService {

    private final Map<DatalistType, DatalistService> services;

    DefaultDatalistService(List<DatalistService> datalistServices) {
        this.services = datalistServices.stream()
                .collect(Collectors.toMap(
                        DatalistService::getDatalistType, Function.identity()));
    }

    public List<DatalistDTO> getDatalist(String name) {
        var datalistType = DatalistType.fromName(name);
        return services.get(datalistType).getDatalist();
    }
}
