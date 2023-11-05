package com.aymanba.ec.model.product;

import com.aymanba.ec.model.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "product")
public class ProductEntity implements BaseEntity<Integer> {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_generator"
    )
    @SequenceGenerator(name = "product_generator",
            sequenceName = "product_seq",
            allocationSize = 1
    )
    private Integer id;
    private String name;
    private Double price;
    private Integer quantity;
    private String category;
    private String description;
    private String reference;
    private String manufacturer;
}
