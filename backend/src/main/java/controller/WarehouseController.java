package controller;

import lombok.RequiredArgsConstructor;
import model.Product;
import org.springframework.web.bind.annotation.*;
import service.WarehouseService;

import java.util.List;
import java.util.NoSuchElementException;

@RequestMapping("Api/product")
@RestController
@RequiredArgsConstructor
public class WarehouseController {

    private final WarehouseService service;

    @GetMapping
    public List<Product> getAllProducts() {return service.getAllProducts();}

    @PostMapping
    public Product saveNewProduct(@RequestBody Product newProduct) {return service.saveNewProduct(newProduct);}

    @PutMapping("/{id}")
    public Product updateProduct(@RequestBody Product requiredProduct) {return service.updateProduct(requiredProduct);}

    @DeleteMapping
    public String deleteProduct(@PathVariable String id) {
        try {
            service.deleteProduct(id).orElseThrow();
            return "Product not deleted";
        }catch (NoSuchElementException e) {
            return "Product deleted ok";
        }
    }


}
