package com.example.backend.repository;

import com.example.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  WarehouseRepository extends MongoRepository<Product,String> {

}
