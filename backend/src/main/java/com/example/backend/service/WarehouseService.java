package com.example.backend.service;

import lombok.RequiredArgsConstructor;
import com.example.backend.model.Product;
import org.springframework.stereotype.Service;
import com.example.backend.repository.WarehouseRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class WarehouseService {
    private final WarehouseRepository repo;
    private final IdGenerator idGenerator;

    public List<Product> getAllProducts(){return repo.findAll();}

    public Product createNewProduct(Product newProduct) {
        Product product = new Product(
                idGenerator.generateId(),
                newProduct.productId(),
                newProduct.productName(),
                newProduct.category(),
                newProduct.productQuantity()

        ); repo.save(product);
        return product;
    }
    public Product findProductById(String id) {
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product with id: " + id + " not found!"));

    }

    public Product updateProduct(Product product, String id) {
        Product productToUpdate = new Product(id, product.productId(), product.productName(), product.category(),product.productQuantity());
        return repo.save(productToUpdate);
    }

    public void deleteProduct (String id) {
        repo.deleteById(id);
    }


}
