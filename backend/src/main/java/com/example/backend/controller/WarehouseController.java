package com.example.backend.controller;

import lombok.RequiredArgsConstructor;
import com.example.backend.model.Product;
import org.springframework.web.bind.annotation.*;
import com.example.backend.service.WarehouseService;

import java.util.List;


@RequestMapping("api/product")
@RestController
@RequiredArgsConstructor
public class WarehouseController {

    private final WarehouseService service;

    @GetMapping("/getAll")
    public List<Product> getAllProducts() {return service.getAllProducts();}

    @GetMapping("/get{id}")
    public Product getProductById(@PathVariable String id) {
        return service.findProductById(id);
    }

    @PostMapping("/add")
    public Product createNewProduct(@RequestBody Product newProduct) {return service.createNewProduct(newProduct);}

    @PutMapping("/update")
    public Product updateProduct(@RequestBody Product product, @PathVariable String id) {return service.updateProduct(product,id);}

    @DeleteMapping("/delete")
    public void  deleteProduct(@PathVariable String id) {
        service.deleteProduct(id);
    }


}



