package service;

import lombok.RequiredArgsConstructor;
import model.Product;
import org.springframework.stereotype.Service;
import repository.WarehouseRepository;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class WarehouseService {
    private final WarehouseRepository repo;

    public List<Product> getAllProducts(){return repo.findAll();}

    public Product saveNewProduct(Product newProduct) {
        Product product = new Product(
                newProduct.id(),
                newProduct.productId(),
                newProduct.productName(),
                newProduct.category(),
                newProduct.productQuantity()

        ); repo.save(product);
        return product;
    }

    public Product updateProduct(Product requiredProduct) {
        Product toUpdate = repo.findById(requiredProduct.id()).orElseThrow();
        repo.save(toUpdate.productId(requiredProduct.id()).withDescription(requiredProduct.id()));
        return repo.findById(toUpdate.id()).orElseThrow();
    }

    public Optional<Product> deleteProduct(String id) {
        repo.delete(repo.findById(id).orElseThrow());
        return repo.findById(id);
    }


}
