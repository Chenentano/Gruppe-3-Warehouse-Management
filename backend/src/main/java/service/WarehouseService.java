package service;

import model.Product;
import repository.WarehouseRepository;

import java.util.List;
import java.util.Optional;

public class WarehouseService {
    private final WarehouseRepository repo;

    public List<Product> getAllProducts(){return repo.findAll();}

    public Product saveNewProduct(Product newProduct) {
        Product product = new Product(
                newProduct.id(),
                newProduct.productId(),
                newProduct.productName(),
                newProduct.productQuantity()
                newProduct.category(),
        ); repo.save(product);
        return product;
    }

    public Product updateProduct(Product requiredProduct) {
        Product toUpdate = repo.findById(requiredProduct.getId()).orElseThrow();
        repo.save(toUpdate.withStatus(requiredProduct.getStatus()).withDescription(requiredProduct.getDescrition()));
        return repo.findById(toUpdate.getId()).orElseThrow();
    }

    public Optional<Product> deleteProduct(String id) {
        repo.delete(repo.findById(id).orElseThrow());
        return repo.findById(id);
    }


}
