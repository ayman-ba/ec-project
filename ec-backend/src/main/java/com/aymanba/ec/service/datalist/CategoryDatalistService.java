package com.aymanba.ec.service.datalist;

import com.aymanba.ec.dto.datalist.DatalistDTO;
import com.aymanba.ec.enums.DatalistType;
import com.aymanba.ec.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryDatalistService implements DatalistService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<DatalistDTO> getDatalist() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryEntity -> DatalistDTO.builder()
                        .label(categoryEntity.getLabel())
                        .code(categoryEntity.getId())
                        .build()
                ).toList();
    }

    @Override
    public DatalistType getDatalistType() {
        return DatalistType.CATEGORIES;
    }
}
