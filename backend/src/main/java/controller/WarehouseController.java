package controller;

import lombok.RequiredArgsConstructor;
import model.Product;
import org.springframework.web.bind.annotation.*;
import service.WarehouseService;

import java.util.List;
import java.util.NoSuchElementException;

@RequestMapping("api/product")
@RestController
@RequiredArgsConstructor
public class WarehouseController {

    private final WarehouseService service;

    @GetMapping("getAllProduct")
    public List<Product> getAllProducts() {return service.getAllProducts();}

    @PostMapping("/addProduct")
    public Product createNewProduct(@RequestBody Product newProduct) {return service.saveNewProduct(newProduct);}

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product, @PathVariable String id) {return service.updateProduct(product,id);}

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable String id) {
        try {
            service.deleteProduct(id).orElseThrow();
            return "Product not deleted";
        }catch (NoSuchElementException e) {
            return "Product deleted ok";
        }
    }


}
