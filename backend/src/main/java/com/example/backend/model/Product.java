package com.example.backend.model;

import org.springframework.data.annotation.Id;

public record Product(
        @Id
        String id,
        String productId,
        String productName,
        ProductCategory category,
        int productQuantity
) {

}
