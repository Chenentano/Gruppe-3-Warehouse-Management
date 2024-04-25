package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public record Product(
        @Id
        String id,
        String productId,
        String productName,
        ProductCategory category,
        int productQuantity
) {

}
