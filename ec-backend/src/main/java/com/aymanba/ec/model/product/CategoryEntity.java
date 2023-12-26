package com.aymanba.ec.model.product;

import com.aymanba.ec.model.BaseEntity;
import jakarta.persistence.Column;
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
@Entity(name = "category")
public class CategoryEntity implements BaseEntity<Short> {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "category_generator"
    )
    @SequenceGenerator(name = "category_generator",
            sequenceName = "category_seq",
            allocationSize = 1
    )
    @Column(name = "id",
            nullable = false,
            unique = true)
    private Short id;

    @Column(name = "label",
            nullable = false,
            unique = true)
    private String label;
}
